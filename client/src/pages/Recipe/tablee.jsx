import React from "react";
import './table.css';
import Blanc from './bidha';
import Taswira from './taswira';
import './home.css';

function Tablee(props) {
  let recipes = props.recipe;
  return (
    <div className="h-recipes v2">
      {recipes.map(recipe => (
            <Taswira key={recipe.id} e={[recipe.image,recipe._id,recipe.email,recipe.name,recipe.description,recipe.category]}></Taswira>
      ))}
    </div>
  );
}

export default Tablee;