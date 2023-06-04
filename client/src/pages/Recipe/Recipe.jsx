import React , {useState,useEffect} from "react";
import {BsHeart } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa';
import "./Recipe.css";

function Recipe() {
  const [featuredImage, setFeaturedImage] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const images = [
      require('./img/photo93.jpg'),
      require('./img/photo17.jpg'),
      require('./img/home22.jpg')
    ];
    let currentIndex = 0;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      currentIndex = (currentIndex + 1) % images.length;
      setFeaturedImage(images[currentIndex]);
    }, 5000);

    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(transitionTimeout);
    };
  }, []);
  return ( 
    <div>
      <div className="container-recipe">
      <div className={`box-13 ${isTransitioning ? 'transitioning' : ''}`}>
          <img src={featuredImage} alt="Loading" />
            <div className="text-container-h">
                <h1>DELICIOUS RECIPES <br />DAILY UPDATED</h1>
                <p>Daily new Recipes and Cooking tips</p>
            </div>
        </div>
        <div className="box-23">
          <div className="recipes-container">
          <div  className="categories-h" >
          <h2>Popular Categories</h2>
          </div>
            <div className="populars">
              <div className="popular" style={{backgroundImage: `url(${require('./img/desserts23.jpg')})`  }}>
              </div>
              <div className="popular" style={{backgroundImage: `url(${require('./img/photo4.jpg')})`  }}></div>
              <div className="popular" style={{backgroundImage: `url(${require('./img/starters21.jpg')})`  }}></div>
            </div>
            <div className="populars-t">
              
                <h3>Desserts</h3>
                <h3>Main Courses</h3>
                <h3>Starters</h3>
              
         
            </div>
     <div className="border1"></div>
              <div className="recipes-p">
                <div>
                    
              <h2>Most Liked Recipe</h2>
              <p>This Week</p>
                </div>
                <div className="most-liked">
                  <div className="recipe-p" style={{backgroundImage: `url(${require('./img/desserts23.jpg')})` }}></div>
                  <div className="recipe-description-p">
                  Recipe: Garden Fresh Salad
                <br />
                <br />
Description: <br />This garden fresh salad is a delightful combination of crisp vegetables, tangy dressing, and a sprinkle of cheese. It's a light and healthy option packed with vitamins and flavors that will leave you feeling refreshed and satisfied.
<br />
                <br />
Category:
                  </div>
                </div>
          </div>
          <div className="border2"></div>
          <div className="recently">
          <div>
              <h2>Most Recent Recipes</h2>
           </div>
           <div className="recipes">
            <div className="recipe" style={{gridArea: 'pd1'}}>
            <div className="recipe-description">
                        <h5>Thai-style mussels</h5>
                        <div className="chef">
                          <img src={require('./img/chef.jpg')} />
                        <h6>Suzy Perry</h6>
                        </div>
                        <hr />
                        <table className="reaction">
                          <tr>
                            <th>
                            <BsHeart/> 75 
                            </th>
                            <th>
                            <FaRegComment /> 20
                            </th>
                          </tr>
                        </table>

                    </div>
            </div>
            <div className="recipe" style={{gridArea: 'pd2'}}>
               <div className="recipe-description">
                        <h5>Thai-style mussels</h5>
                        <div className="chef">
                          <img src={require('./img/chef.jpg')} />
                        <h6>Suzy Perry</h6>
                        </div>
                        <hr />
                        <table className="reaction">
                          <tr>
                            <th>
                            <BsHeart/> 75 
                            </th>
                            <th>
                            <FaRegComment /> 20
                            </th>
                          </tr>
                        </table>

                    </div>
            </div>
            <div className="recipe" style={{gridArea: 'pd3'}}>
               <div className="recipe-description">
                        <h5>Thai-style mussels</h5>
                        <div className="chef">
                          <img src={require('./img/chef.jpg')} />
                        <h6>Suzy Perry</h6>
                        </div>
                        <hr />
                        <table className="reaction">
                          <tr>
                            <th>
                            <BsHeart/> 75 
                            </th>
                            <th>
                            <FaRegComment /> 20
                            </th>
                          </tr>
                        </table>

                    </div>
            </div>
            <div className="recipe" style={{gridArea: 'pd4'}}>
               <div className="recipe-description">
                        <h5>Thai-style mussels</h5>
                        <div className="chef">
                          <img src={require('./img/chef.jpg')} />
                        <h6>Suzy Perry</h6>
                        </div>
                        <hr />
                        <table className="reaction">
                          <tr>
                            <th>
                            <BsHeart/> 75 
                            </th>
                            <th>
                            <FaRegComment /> 20
                            </th>
                          </tr>
                        </table>

                    </div>
            </div>
            <div className="recipe" style={{gridArea: 'pd5'}}>
               <div className="recipe-description">
                        <h5>Thai-style mussels</h5>
                        <div className="chef">
                          <img src={require('./img/chef.jpg')} />
                        <h6>Suzy Perry</h6>
                        </div>
                        <hr />
                        <table className="reaction">
                          <tr>
                            <th>
                            <BsHeart/> 75 
                            </th>
                            <th>
                            <FaRegComment /> 20
                            </th>
                          </tr>
                        </table>

                    </div>
            </div>
            <div className="recipe" style={{gridArea: 'pd6'}}>
               <div className="recipe-description">
                        <h5>Thai-style mussels</h5>
                        <div className="chef">
                          <img src={require('./img/chef.jpg')} />
                        <h6>Suzy Perry</h6>
                        </div>
                        <hr />
                        <table className="reaction">
                          <tr>
                            <th>
                            <BsHeart/> 75 
                            </th>
                            <th>
                            <FaRegComment /> 20
                            </th>
                          </tr>
                        </table>

                    </div>
            </div>
           </div>
           <div className="recipes v2-p">
                <div className="recipe image-p" style={{gridArea: 'pd1' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }} ></div>
                <div className="recipe image-p" style={{gridArea: 'pd2' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }}></div>
                <div className="recipe image-p" style={{gridArea: 'pd3' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }}></div>
                <div className="recipe image-p" style={{gridArea: 'pd4' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }}></div>
                <div className="recipe image-p" style={{gridArea: 'pd5' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }}></div>
                <div className="recipe image-p" style={{gridArea: 'pd6' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }}></div>           
            </div>
          </div>
      </div>
    </div>
    </div>
    </div>
    
    )
}

export default Recipe;