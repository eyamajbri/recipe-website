import React, { useState, useEffect } from "react";
import { FaHeart, FaComment } from 'react-icons/fa';
import "./Profil.css";

const Profil = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUserRecipes = async () => {
      const email = localStorage.getItem("email");
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:8000/recipes?email=${email}`);
        const data = await response.json();
        console.log("data", data);
        const userRecipes = data.filter(recipe => recipe.email === email);
        setRecipes(userRecipes);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserRecipes();
  }, []);

  return (
    <div>
      <div className="container-product">
        <div className="box-1"></div>
        <div className="box-2">
          <div className="bio">
            <h1>{localStorage.getItem("name")} {localStorage.getItem("last")}</h1>
            <p>"An aspiring amateur chef who loves experimenting with flavors and enjoys sharing their culinary creations with others."</p>
          </div>
          <div />
          <hr />
          <br />
          <h2>My recipes</h2>
          {recipes.length ? (
            recipes.map(recipe => (
              <div className="recipe-p" key={recipe._id}>
                <img className="recipeimg" src={`http://localhost:8000/uploads/${recipe.image}`} alt="Recipe Image" width="100px" />
                <div className="desc">
                  <ul>
                    <li>{recipe.name}</li>
                  </ul>
                  <button className="btn">Details</button>
                  <br />
                  <br />
                  <FaHeart /> {recipe.nb_likes} &nbsp;&nbsp;&nbsp;<FaComment /> 0
                </div>
              </div>
            ))
          ) : (
            <h3>No recipes</h3>
          )}
        </div>
      </div>
      <div className="profil-pic" style={{ backgroundImage: `url(http://localhost:8000/uploads/${localStorage.getItem('photo')})` }}>
      </div>
    </div>
  )
}

export default Profil;
