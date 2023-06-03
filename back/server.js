const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const Recipe = require('./models/Recipe');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const port = 8100;

// Define the storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// Create the multer instance with the storage configuration
const upload = multer({ storage });

// Connect to MongoDB
function connectDB() {
  mongoose
    .connect('mongodb+srv://recipes:abcd1234@cluster0.7yzcvnm.mongodb.net/RECIPES_DB?retryWrites=true&w=majority')
    .then(() => {
      console.log('Connected to the database');
    })
    .catch((err) => {
      console.error('Error connecting to the database:', err);
    });
}

// Serve the RecipeForm page
app.get('/recipes', (req, res) => {
  const infoErrorsObj = req.flash('infoErrors');
  const infoSubmitObj = req.flash('infoSubmit');
  res.render('RecipeForm', { title: 'Cooking Blog - Submit Recipe', infoErrorsObj, infoSubmitObj });
});

// Handle POST request to '/recipes' to save a new recipe
app.post('/recipes', upload.single('image'), async (req, res) => {
  const { name, description, ingredients, category } = req.body;

  // Save the submitted recipe to the database
  try {
    const recipe = new Recipe({
      name,
      description,
      ingredients,
      category,
      image: req.file.filename,
    });
    await recipe.save();
    res.sendStatus(200);
  } catch (error) {
    console.error('Error saving recipe:', error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectDB();
});
