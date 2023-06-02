const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const user= require('./models/user');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});
app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
    connectDB();
  });
  function connectDB() {
    mongoose
        .connect("mongodb+srv://selimKetata:11072001@cluster0.viz2sz2.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err);
        });
}
