import React from "react"
import Element from "./element";
import './table.css'

function Table (props){
    let recipes=props.recipe;
    return(<div className="containerrr" > 
             {recipes.map(recipe=>(
                    <div key={recipe.id}>
                        <Element e={[recipe.title,recipe.image,recipe.date,recipe.images,recipe.likes]}></Element>   
                    </div>))} 
                   
    </div>);
}

export default Table;


/*function Table (props){
    let users=props.users;
    return(
     <div className="containerrr" > 
            {users.map(user=>(
                    <div  key={user.id} className="divElement" >
                        
                        <Element e={[user.id,user.first_name,user.last_name,user.email,user.gender,user.ip_address]}></Element>   
                    </div>))}
                   
    </div>);
}

export default Table;*/

/*const [recipes, setRecipes] = useState([]);
    
  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await fetch("http://localhost:8000/recipes");
      const data = await response.json();
      setRecipes(data)
    } catch (error) {
      console.log(error);
    }
  };*/