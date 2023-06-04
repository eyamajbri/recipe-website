import React from "react";
import './table.css';
import Blanc from './bidha';
import Taswira from './taswira';
import './home.css';

function Table(props) {
  let recipes = props.recipe;

  return (
    <div className="h-recipes">
      {recipes.map(recipe => (
        <Blanc key={recipe._id} e={[recipe.name, recipe.nb_likes, recipe.comment, recipe._id]}></Blanc>
      ))}
    </div>
  );
}

export default Table;
