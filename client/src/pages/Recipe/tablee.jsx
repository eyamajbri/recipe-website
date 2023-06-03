import React from "react";
import './table.css';
import Blanc from './bidha';
import Taswira from './taswira';
import './home.css';

function Tablee(props) {
  let recipes = props.recipe;
  console.log(props)
  return (
    <div className="h-recipes v2">
      {recipes.map(recipe => (
            <Taswira key={recipe.id} e={[recipe.image]}></Taswira>
      ))}
    </div>
  );
}

export default Tablee;