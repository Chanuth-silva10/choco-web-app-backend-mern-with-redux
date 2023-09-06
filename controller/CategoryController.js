const Category = require("../models/CategoryModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");
const Features = require("../utils/Features");

// create Category --Admin
exports.createCategory = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "categories",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const category = await Category.create(req.body);

  res.status(201).json({
    success: true,
    category,
  });
});

// Get All Category (Admin)
exports.getAdminCategories = catchAsyncErrors(async (req, res, next) => {
  const categories = await Category.find();

  res.status(200).json({
    success: true,
    categories,
  });
});

// Update Category ---Admin
exports.updateCategory = catchAsyncErrors(async (req, res, next) => {
  let category = await Category.findById(req.params.id);
  if (!category) {
    return next(new ErrorHandler("Category is not found with this id", 404));
  }

  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Delete image from cloudinary
    for (let i = 0; i < category.images.length; i++) {
      await cloudinary.v2.uploader.destroy(category.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "categories",
      });
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    req.body.images = imagesLinks;
  }

  category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  res.status(200).json({
    success: true,
    category,
  });
});

// delete Category
exports.deleteCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    return next(new ErrorHandler("Category is not found with this id", 404));
  }

  // Deleting images from cloudinary
  for (let i = 0; 1 < category.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      category.images[i].public_id
    );
  }

  await category.remove();

  res.status(200).json({
    success: true,
    message: "Category deleted succesfully",
  });
});

// single Category details
exports.getSingleCategory = catchAsyncErrors(async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return next(new ErrorHandler("Category is not found with this id", 404));
  }
  res.status(200).json({
    success: true,
    category,
  });
});

// get All Products
exports.getAllCategories = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 8;

  const categoryCount = await Category.countDocuments();

  const feature = new Features(Category.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const categories = await feature.query;
  res.status(200).json({
    success: true,
    categories,
    categoryCount,
    resultPerPage,
  });
});
