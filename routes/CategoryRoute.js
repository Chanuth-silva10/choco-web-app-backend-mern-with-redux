const express = require("express");
const {
  createCategory,
  getAllCategories,
  updateCategory,
  deleteCategory,
  getSingleCategory,
  getAdminCategories,
} = require("../controller/CategoryController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/categories").get(getAllCategories);
router
  .route("/admin/categories")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminCategories);

router
  .route("/category/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createCategory);

router
  .route("/category/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateCategory)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteCategory)
  .get(getSingleCategory);

module.exports = router;
