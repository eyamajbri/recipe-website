const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const Recipe = require('./models/Recipe');
const morgan = require('morgan');
const bcryptjs = require('bcryptjs');
const createUserValidation = require('./Validation/createUserValidation');
const jwt = require('jsonwebtoken'); 
const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const filename = `${uniqueSuffix}${path.extname(file.originalname)}`;
    cb(null, filename);
  }
});



const upload = multer({ storage });


const app = express();
app.use(express.json());
app.use(cors())

app.post("/upload", upload.single('profile'),(req,res)=>{
  console.log(req)
})









app.use('/uploads', express.static('uploads'));

app.post('/images', upload.single('profile'), (req, res) => {
  console.log(req.file);
  res.json({
    success: 1,
    profile_url: `http://localhost:8000/profile/${req.file.filename}`
  });
});

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
/*app.post('/recipes', requireAuth, async (req, res) => {
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
});*/

// Create a new user
app.post('/users',upload.single('profile'), async (req, res) => {
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
      photo 
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
      favorites:"",
      photo: req.file.filename,
    });
    await user.save();

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server Error' });
  }
});





app.post('/recipes', upload.single('image'), async (req, res) => {
  const { name, description, ingredients, category } = req.body;

  // Save the submitted recipe to the database
  try {
    const recipe = new Recipe({
      name,
      description,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()),
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
      const userProfile = {
        id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      nationality: user.nationality,
      favorites: user.favorites,
      photo: user.photo,
      };
      // Send the token in the response
      res.json({ token, userData: userProfile });
    } catch (error) {
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
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.userId = decoded.userId;
    next();
  });
};


app.get('/user/profile', requireAuth, async (req, res) => {
    try {
      // Find the user by ID
      const user = await User.findById(req.userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Customize the user profile data to your needs
      const userProfile = {
        id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      nationality: user.nationality,
      favorites: user.favorites,
      photo: user.photo,
      };
  
      res.json({ token, userData: userProfile });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server Error' });
    }
  });