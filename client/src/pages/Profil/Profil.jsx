import React from "react";
import { FaHeart, FaComment } from 'react-icons/fa';
import "./Profil.css";

const Profil = () => {
  return (
    <div>
      <div className="container-product">
    <div className="box-1" ></div>
    <div className="box-2">
      <div className="bio">
        <h1> Yasmine Mahmoudi </h1>
        <p>"an aspiring amateur chef who loves experimenting with flavors and enjoys sharing their culinary creations with others."</p>
      </div>
      <div/>
      <hr />
      <br />
      <h2>Recipes</h2>
      <div className="recipe">
        <img src={require('./thai-food.jpg')} />
        <div className="desc">
          <ul>
            <li>
              Thai-style mussels
            </li>
            <li>
              Thai
            </li>
          </ul>
          <button className="btn">Details</button>
      
          <button className="btn">Edit</button>
          <br/>
          <br/>
          < FaHeart/> 100&nbsp;&nbsp;&nbsp;<FaComment/> 20
        </div>
      </div>
      <div className="recipe">
        < img src={require('./thai-food.jpg')} />
        <div className="desc">
          <ul>
            <li>
              Thai-style mussels
            </li>
            <li>
              Thai
            </li>
          </ul>
          <button className="btn">Details</button>
      
          <button className="btn">Edit</button>
          <br/>
          <br/>
          < FaHeart/> 100&nbsp;&nbsp;&nbsp;<FaComment/> 20
        </div>
      </div>
    </div>
</div>
<div className="profil-pic" style={{backgroundImage: `url(${require('./chef.jpg')})` }}>
  
</div>


    </div>
  )
}

export default Profil;