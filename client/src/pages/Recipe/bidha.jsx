import React from "react";
import './home.css';
import { BsHeart } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';

function Blanc(props) {
    console.log(props)
  return (
    <div className="h-recipe" >
      <div className="h-recipe-description">
        <h5>{props.e[0]}</h5>
        <div className="chef">
          <img src={require('./img/chef.jpg')} alt="Chef" />
          <h6>Suzy Perry</h6>
        </div>
        <hr />
        <table className="reaction">
          <tbody>
            <tr>
              <th>
                <BsHeart /> {props.e[1]}
              </th>
              <th>
                <FaRegComment /> 20
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Blanc;
