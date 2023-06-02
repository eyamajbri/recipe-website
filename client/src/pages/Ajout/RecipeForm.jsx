import React, { useState } from 'react';
import './style.css';

const RecipeForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

 
  const apiUrl = 'http://localhost:8080';


  const handleSubmit = async (event) => {
    
    event.preventDefault();

    
    // Create a FormData object to send the form data
    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);
    formData.append('description', description);
    formData.append('ingredients', ingredients.join(','));
    formData.append('category', category);
    formData.append('image', image);

    // Send the recipe data to the server
    try {
      const response = await fetch(`${apiUrl}/recipes`, {
        method: 'POST',
        body: formData,
      });      

      if (response.ok) {
        // Recipe was successfully saved
        // Reset form fields
        setEmail('');
        setName('');
        setDescription('');
        setIngredients([]);
        setCategory('');
        setImage(null);
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle fetch or server connection error
    }
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, '']);
    
    // Scroll to the newly added ingredient
    setTimeout(() => {
      const ingredientDivs = document.getElementsByClassName('ingredientDiv');
      const lastIngredientDiv = ingredientDivs[ingredientDivs.length - 1];
      lastIngredientDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 100);
  };

  const handleIngredientChange = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = event.target.value;
    setIngredients(newIngredients);
  };

  return (
    <div>
     

    <div class="row justify-content-center">

    <form encType="multipart/form-data" id='form' >
    <div class="box-outer">
      <h1 class="display-5 fw-bold">Submit Your Recipe</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead">Share your amazing recipies with thousands of web developers accross the world. Fill our form to get started.</p>
      </div>
    </div>
      <div className="row g-3">
        <div className="form-control">
          <label>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          required/>
        </div>

        <div className="form-control">
          <label >
            Recipe Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="form-control"
            cols="30"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="form-control">
          <label>
            Ingredients
          </label>
          <div className="ingredientList">
            {ingredients.map((ingredient, index) => (
              <div className="ingredientDiv mb-1" key={index}>
                <input
                  type="text"
                  name="ingredients"
                  className="form-control"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(e, index)}
                />
              </div>
            ))}
          </div>
          <button type="button" className="btn" onClick={handleAddIngredient}>
            + Ingredient
          </button>
        </div>

        <div className="form-control">
          <label>Select Category</label>
          <select
            className="form-select form-control"
            name="category"
            aria-label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select Category</option>
            <option value="Thai">Thai</option>
            <option value="American">American</option>
            <option value="Chinese">Chinese</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
          </select>
        </div>

        <div className="form-control">
          <label>Product Image</label>
          <input
            type="file"
            className="form-control"
            name="image"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="form-control">
          <button type="submit" id='submit' onClick={handleSubmit}>
            Submit Recipe
          </button>
        </div>
      </div>
    </form>
   </div>
   </div>
  );
};

export default RecipeForm;
