const Brand = require("../models/BrandModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const cloudinary = require("cloudinary");
const Features = require("../utils/Features");

// create Brand --Admin
exports.createBrand = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "brands",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const brand = await Brand.create(req.body);

  res.status(201).json({
    success: true,
    brand,
  });
});

// Get All Brand (Admin)
exports.getAdminBrands = catchAsyncErrors(async (req, res, next) => {
  const brands = await Brand.find();

  res.status(200).json({
    success: true,
    brands,
  });
});

// Update Brand ---Admin
exports.updateBrand = catchAsyncErrors(async (req, res, next) => {
  let brand = await Brand.findById(req.params.id);
  if (!brand) {
    return next(new ErrorHandler("Brand is not found with this id", 404));
  }

  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Delete image from cloudinary
    for (let i = 0; i < brand.images.length; i++) {
      await cloudinary.v2.uploader.destroy(brand.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "brands",
      });
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    req.body.images = imagesLinks;
  }

  brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  res.status(200).json({
    success: true,
    brand,
  });
});

// delete Brand
exports.deleteBrand = catchAsyncErrors(async (req, res, next) => {
  const brand = await Brand.findById(req.params.id);

  if (!brand) {
    return next(new ErrorHandler("Brand is not found with this id", 404));
  }

  // Deleting images from cloudinary
  for (let i = 0; 1 < brand.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      brand.images[i].public_id
    );
  }

  await brand.remove();

  res.status(200).json({
    success: true,
    message: "Brand deleted succesfully",
  });
});

// single Brand details
exports.getSingleBrand = catchAsyncErrors(async (req, res, next) => {
  const brand = await Brand.findById(req.params.id);
  if (!brand) {
    return next(new ErrorHandler("Brand is not found with this id", 404));
  }
  res.status(200).json({
    success: true,
    brand,
  });
});

// get All Brands
exports.getAllBrands = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 8;

  const brandCount = await Brand.countDocuments();

  const feature = new Features(Brand.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const brands = await feature.query;
  res.status(200).json({
    success: true,
    brands,
    brandCount,
    resultPerPage,
  });
});
