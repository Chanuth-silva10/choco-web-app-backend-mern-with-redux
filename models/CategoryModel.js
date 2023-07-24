const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name of a Category"],
    trim: true,
    maxLength: [20, "Category name not exceed than 20 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description of your Category"],
    maxlength: [4000, "Description is can not exceed than 4000 characters"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Category", CategorySchema);
