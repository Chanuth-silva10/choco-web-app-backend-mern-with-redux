const Wishlist = require("../models/WishListModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");

// Add to wishlist
exports.addToWishlist = catchAsyncErrors(async (req, res, next) => {
  const { productName, productImage, productPrice, userId, productId } =
    req.body;
  const wishList = await Wishlist.create({
    productName,
    productImage,
    productPrice,
    userId,
    productId,
  });

  res.status(200).json({
    success: true,
    wishList,
  });
});

// get wishlist Data
exports.getWishlistData = catchAsyncErrors(async (req, res, next) => {
  const wishlistData = await Wishlist.find({ userId: "uid1" }); //req.user.id

  res.status(200).json({
    success: true,
    wishlistData,
  });
});

// remove wishlistData
exports.removeWishlistData = catchAsyncErrors(async (req, res, next) => {
  const wishlistData = await Wishlist.findById(req.params.id);

  if (!wishlistData) {
    return next(new ErrorHandler("No wishlistData found with this id", 404));
  }

  await wishlistData.remove();

  res.status(200).json({
    success: true,
    message: "Item removed from wishlist",
  });
});
