import { useState, useEffect } from 'react';


  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:8000/recipes");
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  function getRecipes(page, limit) {
    let array = [];
    for (let i = (page - 1) * limit; i < page * limit && recipes[i]; i++) {
      array.push(recipes[i]);
    }
    return array;
  }
  
 
  
  export { getRecipes};
  


