import React from "react";
import "./Item.css";

function Item() {
  return (
    <div className='item'>
    <div className="form-container-it">
      <div className="par12-it">
        <div className="imgg">
          <img src={require('./photo10.jpg')} alt="" />
        </div>
        <div className="descr">
        <b>Recipe:</b> Garden Fresh Salad
                <br />
                <br />
<b>Description:</b> <br /><br />This garden fresh salad is a delightful combination of crisp vegetables, tangy dressing, and a sprinkle of cheese. It's a light and healthy option packed with vitamins and flavors that will leave you feeling refreshed and satisfied.
<br />
                <br />
<b>Category:</b> Main Courses
<br /><br />
<b>BY:</b> Yasmine Mahmoudi
        </div>
      </div>
    </div>
  </div>
  )
}

export default Item;