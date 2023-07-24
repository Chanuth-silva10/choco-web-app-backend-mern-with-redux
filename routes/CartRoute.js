const express = require("express");
const {
  addCart,
  updateCart,
  getCartData,
  removeCartData,
} = require("../controller/CartController");

const router = express.Router();

router.route("/cart/addToCart").post(addCart);
router.route("/cart/updateCart/:id").put(updateCart);
router.route("/cart").get(getCartData);
router.route("/cart/delete/:id").delete(removeCartData);

module.exports = router;
