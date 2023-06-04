import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchLetter, setSearchLetter] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true); 
        const response = await fetch("http://localhost:8000/recipes");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (searchLetter === "") {
      setSearchResults(recipes);
    } else {
      const filteredRecipes = recipes.filter(recipe =>
        recipe.name.startsWith(searchLetter)
      );
      setSearchResults(filteredRecipes);
    }
  }, [searchLetter, recipes]);

  function handleSearchLetterChange(event) {
    setSearchLetter(event.target.value);
  }

  let navigate = useNavigate();

  const navigateToRecipe = (recipeId) => {
    navigate(`/item/${recipeId}`);
  };
  
  if (localStorage.getItem('token')) {
    return (
      <div style={{display:"flex", gap:"20px", height: "100px"}}>
        <Link to="/profil"><img src={`http://localhost:8000/uploads/${localStorage.getItem('photo')}`} alt="Profile Photo" /></Link>
        <Link to="/profil"><p>{localStorage.getItem('name')}</p></Link>
        <Link to="/">Home</Link>
        <Link to="/recipe">recipe</Link>
        <Link to="/Ajout">Ajouter</Link>
        <button onClick={() => { navigate("/login"); localStorage.removeItem("token") }}>logout</button>
        <input
          type="text"
          value={searchLetter}
          onChange={handleSearchLetterChange}
          placeholder="Enter a letter to search"
        />
        <div style={{ overflowY: "scroll", maxHeight: "200px" }}>
          <ul>
            {searchResults.map(recipe => (
              <li key={recipe.id} onClick={() => navigateToRecipe(recipe.id)}>
<img src={`http://localhost:8000/uploads/${recipe.image}`} alt="Recipe Photo" width={12}/>               
 {recipe.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div style={{display:"flex", gap:"20px", height: "100px"}}>
      <Link to="/">Home</Link>
      <Link to="/login">login</Link>
      <Link to="/signup">signup</Link>
      <Link to="/recipe">recipe</Link>
      <input
        type="text"
        value={searchLetter}
        onChange={handleSearchLetterChange}
        placeholder="Enter a letter to search"
      />
      <div style={{ overflowY: "scroll", maxHeight: "200px" }}>
        <ul>
          {searchResults.map(recipe => (
            <li key={recipe.id} onClick={() => navigateToRecipe(recipe.id)}>
<img src={`http://localhost:8000/uploads/${recipe.image}`} alt="Recipe Photo" width={12}/>              {recipe.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
