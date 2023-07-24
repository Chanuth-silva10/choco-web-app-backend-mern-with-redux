const mongoose = require("mongoose");

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name of a Brand"],
    trim: true,
    maxLength: [20, "Brand name not exceed than 20 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description of your Brand"],
    maxlength: [3000, "Description is can not exceed than 3000 characters"],
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

module.exports = mongoose.model("Brand", BrandSchema);
