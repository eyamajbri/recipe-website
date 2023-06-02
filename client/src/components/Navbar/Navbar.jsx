/*import React from "react";
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

export default Navbar;*/
import React, {useState, useEffect} from 'react'
// import logoNavBar from'./../assets/logoNavBar.png';
// import menuToggle from './../assets/menuToggle.png';
// import loop from './../assets/loop.png';
// import search from './../assets/search.png';


import './Navbar.css'

function NavBar() {
  // toggle Menu
    const [toggleMenu, setToggleMenu] = useState(false)
     const toggleNav = () => {
        setToggleMenu(!toggleMenu)
     }
     const [screenWidth, setScreenWidth] = useState(window.innerWidth)
     useEffect(() => {

       const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
       }, [])

      useEffect(() => {
        const changeWidth = () => {
           setScreenWidth(window.innerWidth);
        }
         return () => {
            window.removeEventListener('resize', changeWidth)
        }
      }, [])
// search bar
    useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 570px)");
    const handleMediaQueryChange = (e) => {
        setToggleMenu(false);
        };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
       }, []);

// search bar
const [displayInput, setDisplayInput] = useState(false);
useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 570px)");
    const handleMediaQueryChange = (e) => {
        setDisplayInput(false);
        };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
       }, []);


    return (
      
       <div className='allNavBar'>
        
        <img className='logoNB' src="" />
        
        <nav   className='navBar-container'>
        
            
             {((toggleMenu || screenWidth > 300) && (<div className='hbc' >
                
                <div className='elem elemi'><a href="#">HOME</a></div>
                <div className='aaaa'></div>
                <div className='elem elemi'><a href="#">SHOP</a></div>
                <div className='aaaa'></div>
                <div className='elemi elemi3' ><a href="#">CONTACTS</a></div>
              
                
            </div>))}
                  <div className='searchbar'>
                  <input type="text"  className='inputText' /> 
                  <button className='loopBtn ' type="submit" > 
                  <img src="" className='loop'/>
                  </button>
                  </div>
                         
        </nav>


        
        <div className='respNavBar'>

          <div className='firstPart'>
              


          <div className='searchbar bar2'>
                  { (displayInput) && (<input type="text"  className='inputText' /> )}
                  <button className='loopBtn ' type="submit"  onClick={() => setDisplayInput(!displayInput)}> 
                  <img src="" className='search'/>
                  </button>
          </div>
                  

          {(toggleMenu ) && ((<div className='secondPart'>
                
                <div className='elemm1'><a className='elemm' href="#">HOME</a><hr></hr></div>
                <div ><a className='elemm' href="#">SHOP</a><hr></hr></div>
                <div className='last'><a className='elemm' href="#">CONTACTS</a></div>
          </div>))}
          <img src="" className='btnMenu' onClick={() => setToggleMenu(!toggleMenu)}/></div>
        
        
    </div>
      </div>
        
    )
    }

export default NavBar;

