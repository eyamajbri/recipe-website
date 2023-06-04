import React from "react";
import './home.css';

function Taswira(props) {
  console.log(props)
  return (
    <div className="h-recipe image" style={{ backgroundImage: `url(http://localhost:8000/uploads/${props.e[0]})` }}></div>
  );
}

export default Taswira;

