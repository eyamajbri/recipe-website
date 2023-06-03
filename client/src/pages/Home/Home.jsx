import React from "react";
import {BsHeart } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa';
import "./Home.css";

function Home() {
  return( 
  <div>
    <div className="container-h-recipe">
      <div className="box-12">
        <img src={require('./img/home12.jpg')}  />
          <div className="text-container">
              <h1>EXPLORE RECIPES</h1>
          </div>
      </div>
      <div className="box-22">
        <div className="h-recipes-container">
          <div  className="categories" >
          <ul>
                <li><a className="categorie" > ALL </a></li>
                <li><a className="categorie" > STARTERS </a></li>
                <li><a className="categorie" > MAIN COURSES </a></li>
                <li><a className="categorie" > SIDE DISHES </a></li>
                <li><a className="categorie" > DESSERTS </a></li>
            </ul>
          </div>
          
            <div className="h-recipes">
                <div className="h-recipe" style={{gridArea: 'pd1' }} >
                    <div className="h-recipe-description">
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
                <div className="h-recipe" style={{gridArea: 'pd2' }}>
                    <div className="h-recipe-description">
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
                
                <div className="h-recipe" style={{gridArea: 'pd3' }}>
                    <div className="h-recipe-description">
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
                <div className="h-recipe" style={{gridArea: 'pd4' }}>
                    <div className="h-recipe-description">
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
                <div className="h-recipe" style={{gridArea: 'pd5' }}>
                    <div className="h-recipe-description">
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
                <div className="h-recipe" style={{gridArea: 'pd6' }}>
                    <div className="h-recipe-description">
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
                <div className="h-recipe" style={{gridArea: 'pd7' }} >
                    <div className="h-recipe-description">
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
                <div className="h-recipe" style={{gridArea: 'pd8' }}>
                    <div className="h-recipe-description">
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
                <div className="h-recipe" style={{gridArea: 'pd9' }}>
                    <div className="h-recipe-description">
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
            <div className="h-recipes v2">
                <div className="h-recipe image" style={{gridArea: 'pd1' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }} ></div>
                <div className="h-recipe image" style={{gridArea: 'pd2' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }}></div>
                <div className="h-recipe image" style={{gridArea: 'pd3' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }}></div>
                <div className="h-recipe image" style={{gridArea: 'pd4' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }}></div>
                <div className="h-recipe image" style={{gridArea: 'pd5' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }}></div>
                <div className="h-recipe image" style={{gridArea: 'pd6' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }}></div>
                <div className="h-recipe image" style={{gridArea: 'pd7' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }} ></div>
                <div className="h-recipe image" style={{gridArea: 'pd8' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }}></div>
                <div className="h-recipe image" style={{gridArea: 'pd9' ,backgroundImage: `url(${require('./img/thai-food.jpg')})`  }}></div>
           </div>
        </div>
        <div className=""></div>
    </div>
  </div>
  </div>
  )
}

export default Home;