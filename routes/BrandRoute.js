const express = require("express");
const {
  createBrand,
  getAllBrands,
  updateBrand,
  deleteBrand,
  getSingleBrand,
  getAdminBrands,
} = require("../controller/BrandController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/brands").get(getAllBrands);
router
  .route("/admin/brands")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminBrands);

router
  .route("/brand/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createBrand);

router
  .route("/brand/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateBrand)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteBrand)
  .get(getSingleBrand);

module.exports = router;
