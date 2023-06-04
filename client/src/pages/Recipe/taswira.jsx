import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Taswira(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item`);
  };

  return (
    <div
      className="h-recipe image"
      style={{
        backgroundImage: `url(http://localhost:8000/uploads/${props.e[0]})`,
      }}
      onClick={handleClick}
    ></div>
  );
}

export default Taswira;
