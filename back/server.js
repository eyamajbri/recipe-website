const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Recipe = require('./models/Recipe');
const morgan = require('morgan');
const bcryptjs = require('bcryptjs');
const createUserValidation = require('./Validation/createUserValidation');
const jwt = require('jsonwebtoken'); 

const app = express();
app.use(cors());
app.use(express.json());

// Middleware to log requests
app.use(morgan('dev'));

// Connect to MongoDB
connectDB();

// Connect to MongoDB function
function connectDB() {
  mongoose
    .connect('mongodb+srv://eyamajbri:eyam@cluster.lyjhbei.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
      // Start the server once connected to MongoDB
      app.listen(8000, () => {
        console.log(`Server is running on port 8000.`);
      });
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
}

// Middleware for authentication
const requireAuth = (req, res, next) => {
  const token = req.header('Authorization');

  // Check if the token exists
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'your-secret-key');

    // Attach the user ID to the request object
    req.userId = decoded.userId;

    // Proceed to the next middleware
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// Routes

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Create a new recipe
app.post('/recipes', requireAuth, async (req, res) => {
  try {
    const {
      title,
      description,
      ingredients,
      category,
      image,
      nb_likes,
    } = req.body;

    // Access the logged-in user's ID from req.userId
    const user = req.userId;

    const newRecipe = new Recipe({
      user,
      title,
      description,
      ingredients,
      category,
      image,
      nb_likes,
    });

    const savedRecipe = await newRecipe.save();

    res.status(201).json(savedRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Create a new user
app.post('/users', async (req, res) => {
  try {
    console.log(req.body);
    const validation = createUserValidation.validate(req.body);
    if (validation.error) {
      return res.status(400).json({ error: validation.error.details });
    }

    const {
      email,
      password,
      firstName,
      lastName,
      nationality,
    } = validation.value;

    let userAlreadyExist = await User.findOne({ email });
    if (userAlreadyExist) {
      return res.json({ msg: 'User with this email already exists' });
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const user = new User({
      email,
      firstName,
      lastName,
      nationality,
      password: hashedPassword,
      favorites: '',
      photo:'',
    });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Get all recipes
app.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});

// Login route
app.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email });
  
      // Check if the user exists
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Check if the password is valid
      const isPasswordValid = await bcryptjs.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Generate a JWT token
      const token = jwt.sign({ userId: user._id }, 'your-secret-key');
  
      // Send the token in the response
      res.json({ token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  });
  

// Protected route example
app.get('/protected', requireAuth, (req, res) => {
  // Access the logged-in user's ID from req.userId
  const userId = req.userId;

  // Handle the protected route logic
  // ...

  res.json({ message: 'Protected route accessed successfully' });
});
