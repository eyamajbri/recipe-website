import React, { useState, useEffect } from "react";
import './home.css';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { FaRegComment } from 'react-icons/fa';
import axios from 'axios';

function Blanc(props) {
  console.log(props.e[3]);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(props.e[1]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      // Check if the user has already liked this item
      const userLiked = localStorage.getItem(`like_${props.e[3]}`);
      if (userLiked) {
        setIsLiked(true);
      }
    }
  }, [props.e[3], token]);

  const handleLikeClick = async () => {
    if (!token) {
      // User is not logged in, redirect to the login page
      window.location.href = '/login'; // Replace with your login page URL
      return;
    }

    const updatedLikeCount = isLiked ? likeCount - 1 : likeCount + 1;

    setIsLiked(!isLiked);
    setLikeCount(updatedLikeCount);

    try {
      // Update nb_likes in the database and set local storage for the current user
      await Promise.all([
        axios.put(`http://localhost:8000/recipes/${props.e[3]}`, { nb_likes: updatedLikeCount }),
        localStorage.setItem(`like_${props.e[3]}`, !isLiked),
      ]);
    } catch (error) {
      console.error('Failed to update nb_likes or local storage:', error);
    }
  };

  return (
    <div className="h-recipe">
      <div className="h-recipe-description">
        <h5>{props.e[0]}</h5>
        <div className="chef">
          <img src={require('./img/chef.jpg')} alt="Chef" />
          <h6>Suzy Perry</h6>
        </div>
        <hr />
        <table className="reaction">
          <tbody>
            <tr className="rreact">
              <th onClick={handleLikeClick} className="heartdiv">
                {token && isLiked ? <BsHeartFill /> : <BsHeart />}
               <div className="heart"> {likeCount}</div>
              </th>
              <th className="heartdiv">
                <FaRegComment /> 
                <div>20</div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Blanc;
