const express = require("express");
const {
  createUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  userDetails,
  updatePassword,
  updateProfile,
  getAllUsers,
  getSingleUser,
  updateUserRole,
  deleteUser,
} = require("../controller/UserController");

const router = express.Router();

router.route("/registration").post(createUser);

router.route("/login").post(loginUser);

module.exports = router;
