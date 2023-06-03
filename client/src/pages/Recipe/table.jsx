import React from "react";
import './table.css';
import Blanc from './bidha';
import Taswira from './taswira';
import './home.css';

function Table(props) {
  let recipes = props.recipe;
  
  return (
    <div className="h-recipes">
      {recipes.map(recipe => (
          
            <Blanc key={recipe.id} e={[recipe.name, recipe.nb_likes]}></Blanc>
          
          
        
      ))}
    </div>
  );
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