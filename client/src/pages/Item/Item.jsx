import React from "react";
import "./Item.css";
import { useLocation } from "react-router-dom";


function Item() {
  const location = useLocation();
  const props = location.state.props;
  console.log(props)
  
  return <div>Item
    <div>{props.e[0]}</div>
    <img src={props.e[1]} className="photo"/>
  </div>;
}

export default Item;