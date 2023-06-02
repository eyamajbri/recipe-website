import React from "react";
import {useState} from 'react'
import { useEffect } from 'react';

function Navbar() {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setIsLoading(true); 
        const response = await fetch("http://localhost:8000/recipes");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    fetchRecipes();
    }, []);


    useEffect(() => {
      const fetchUsers = async () => {
        try {
          setIsLoading(true); 
          const response = await fetch("http://localhost:8000/users");
          const data = await response.json();
          setUsers(data);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
    
      fetchUsers();
      }, []);
  console.log('****************')
  console.log(users)

  function handleClick(){
    let search=document.querySelector(".searchBar")
    console.log(search.target.value)

  }
  return <div>
    <input type="text" value="" name="" classname="searchBar"></input>
    <button onclick={handleClick}>click</button>
  </div>;
}

export default Navbar;
