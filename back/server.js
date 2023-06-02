const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bcryptjs = require('bcryptjs');
const User = require('./user');
const Recipe = require('./recipe');
const app = express();

app.use(cors());
app.use(express.json());

app.get("/recipes", async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.json(recipes);
   } catch (error) {
     console.error(error);
     res.status(500).json({ error: "Server Error" });
    }
      });

app.get("/users",async (req,res)=>{
    const users = await User.find()
    res.json(users)
 })
 /*app.post("/recipes", async (req, res) => {
    try {
     const {
        user,
        title,
        description,
        ingredients,
        category,
        image,
        nb_likes
      } = req.body;
  
       const newRecipe = new Recipe({
        user,
        title,
        description,
        ingredients,
        category,
        image,
        nb_likes
     });
  
      const savedRecipe = await newRecipe.save();
  
       res.status(201).json(savedRecipe);
     } catch (error) {
       console.error(error);
       res.status(500).json({ error: "Server Error" });
    }
  });
  
  
 app.post("/users", async (req, res) => {
     try {
       console.log(req.body);
       const validation = createUserValidation.validate(req.body);
       if (validation.error) {
         return res.status(400).json({ error: validation.error.details });
       }
  
       const { email, password, firstName, lastName, nationality, favorites, photo } = validation.value;
  
       let userAlreadyExist = await User.findOne({ email });
       if (userAlreadyExist) {
         return res.json({ msg: "User with this email already exists" });
       }
  
       const salt = bcryptjs.genSaltSync(10);
       const hashedPassword = bcryptjs.hashSync(password, salt);
  
       const user = new User({
         email,
         firstName,
         lastName,
         nationality,
         password: hashedPassword,
         favorites,
         photo,
       });
       await user.save();
  
       res.status(201).json(user);
     } catch (error) {
       console.error(error);
       res.status(500).json({ error: "Server Error" });
     }
   });*/
  

 //===========
 app.listen(8000, () => {
    console.log('Server is running on port 8000.');
    connectDB();
  });
  
  function connectDB() {
    const dbURI = "mongodb+srv://eyamajbri:eyam@cluster.lyjhbei.mongodb.net/";
  
    mongoose
      .connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
      });
  }
  