const express = require("express");
const {
  addToWishlist,
  getWishlistData,
  removeWishlistData,
} = require("../controller/WishListController");

const router = express.Router();

router.route("/wishlist/add").post(addToWishlist);
router.route("/wishlist").get(getWishlistData);
router.route("/wishlist/delete/:id").delete(removeWishlistData);

module.exports = router;
