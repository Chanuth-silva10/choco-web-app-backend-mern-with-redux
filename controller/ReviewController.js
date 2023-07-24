const Review = require("../models/ReviewModel");

exports.createReview = async (req, res) => {
  const newreview = new Review({
    ID: req.body.id,
    Rating: req.body.rating,
    Review: req.body.review,
  });

  await newreview
    .save(newreview)
    .then(res.send({ message: "Success" }))
    .catch((err) => {
      res.send(err);
    });
};

exports.updateReview = async (req, res) => {
  let id = req.body.id;
  let rating = req.body.rating;
  let review = req.body.review;
  await Review.findByIdAndUpdate(req.params.id, { id, rating, review }).then(
    res.send({ message: "Success" })
  );
};

exports.deletereview = async (req, res) => {
  let id = req.params.id;
  await Review.findByIdAndDelete(id).then(res.send({ message: "Success" }));
};
exports.findallreview = async (req, res) => {
  await Review.find().then((data) => {
    res.send(data);
  });
};

exports.findonereview = async (req, res) => {
  let searchID = req.params.searchID;
  await Review.find({ ID: searchID }).then((data) => {
    res.send(data);
  });
};
exports.filterbyRating = async (req, res) => {
  let rating = req.params.rating;
  await Review.find({ Rating: rating }).then((data) => {
    res.send(data);
  });
};

exports.filterbyRatingandID = async (req, res) => {
  let rating = req.params.rating;
  let searchID = req.params.searchID;
  console.log("Iwork");
  await Review.find({ ID: searchID, Rating: rating }).then((data) => {
    res.send(data);
  });
};
