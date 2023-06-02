const mongoose = require("mongoose")


const Schema = mongoose.Schema


const recipe = new mongoose.Schema({
    id:Number,
    title: String,
    description: String,
    images: [String],
    nationality: String,
    chef: String,
    category: String,
    likes: Number,
    comments: [{ user: String, comment: String }],
    ingredients: [String],
    preparation: [String],
    date: {
      type: String,
      default: () => {
        const currentDate = new Date();
        const day = String
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        return `${day}-${month}-${year}`;
      }
    }
  });


const RecipeModel = mongoose.model("recipe",recipe)

module.exports = RecipeModel