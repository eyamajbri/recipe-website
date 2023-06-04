import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchLetter, setSearchLetter] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false); // Track whether to show search results or not

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
    setShowResults(searchLetter !== ""); // Show results only when there is a filter
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
      <div className='navbar'>
        <div className='avant'>
          <Link className='lien' to="/">Home</Link>
          <Link className='lien' to="/recipe">Recipe</Link>
          <input
            type="text"
            value={searchLetter}
            onChange={handleSearchLetterChange}
            placeholder="Enter a letter to search"
          />
         <Link to="/profil"><img src={`http://localhost:8000/uploads/${localStorage.getItem('photo')}`} alt="Profile Photo" className='photoo'/></Link>
        <Link to="/profil" className='nom'><p className='logout'>{localStorage.getItem('name')}</p></Link>
        <button onClick={() => { navigate("/login"); localStorage.removeItem("token") }}>Log out</button>
        <Link className='lien' to="/Ajout">Ajouter</Link>
        </div>
        {showResults && (
          <div className='divv'>
            <ul>
              {searchResults.map(recipe => (
                <li key={recipe.id} onClick={() => navigateToRecipe(recipe.id)}>
                 <img src={`http://localhost:8000/uploads/${recipe.image}`} alt="Recipe Photo" width={12}/>               
                  {recipe.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='navbar'>
      <div className='avant'>
        <Link className='lien' to="/">Home</Link>
        <Link className='lien' to="/recipe">recipe</Link>
        <input className='search'
          type="text"
          value={searchLetter}
          onChange={handleSearchLetterChange}
          placeholder="Enter a letter to search"
        />
        <Link className='lien' to="/signup"><span>Sign up</span></Link>
        <Link className='lien' to="/login" style={{backgroundColor: 'rgb(76, 106, 61)',color: '#fffff'}}>login</Link>
      </div>
      {showResults && (
        <div style={{ overflowY: "scroll", maxHeight: "200px" }}>
          <ul>
            {searchResults.map(recipe => (
              <li key={recipe.id} onClick={() => navigateToRecipe(recipe.id)}>
                <img src={`http://localhost:8000/uploads/${recipe.image}`} alt="Recipe Photo" width={12}/>              {recipe.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
