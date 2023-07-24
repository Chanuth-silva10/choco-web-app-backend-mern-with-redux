const router = require("express").Router();
const {
  createReview,
  updateReview,
  deletereview,
  findallreview,
  findonereview,
  filterbyRating,
  filterbyRatingandID,
} = require("../controller/ReviewController");

router.route("/review").post(createReview);
router.route("/review/:id").put(updateReview);
router.route("/review/:id").delete(deletereview);
router.route("/review").get(findallreview);
router.route("/review/search/:searchID").get(findonereview);
router.route("/review/search/rating/:rating").get(filterbyRating);
router
  .route("/review/search/idrating/:searchID/:rating")
  .get(filterbyRatingandID);
module.exports = router;
