const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: String,
  items: Number,
  image: String
});

module.exports = mongoose.model("Category", CategorySchema);