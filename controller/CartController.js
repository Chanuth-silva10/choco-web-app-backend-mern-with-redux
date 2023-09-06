const Cart = require("../models/CartModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");

// add to cart

exports.addCart = catchAsyncErrors(async (req, res) => {
  const {
    productName,
    quantity,
    productImage,
    productPrice,
    userId,
    productId,
    Stock,
  } = req.body;

  const cart = await Cart.create({
    productName,
    quantity,
    productImage,
    productPrice,
    userId,
    productId,
    Stock,
  });

  res.status(200).json({ success: true, cart });
});

// update Cart
exports.updateCart = catchAsyncErrors(async (req, res, next) => {
  const { quantity } = req.body;
  const cart = await Cart.findByIdAndUpdate(req.params.id);

  if (!cart) {
    return next(new ErrorHandler("No cart found with this id", 404));
  }

  await cart.updateOne({
    quantity,
  });
});

// get Cart Data
exports.getCartData = catchAsyncErrors(async (req, res, next) => {
  const cartData = await Cart.find({ userId: "uid1" }); //req.user.id
  res.status(200).json({
    success: true,
    cartData,
  });
});

// remove Cart Data
exports.removeCartData = catchAsyncErrors(async (req, res, next) => {
  const cartData = await Cart.findById(req.params.id);

  if (!cartData) {
    return next(new ErrorHandler("Items is not found with this id", 404));
  }

  await cartData.remove();

  res.status(200).json({
    success: true,
    message: "Item removed from cart",
  });
});
