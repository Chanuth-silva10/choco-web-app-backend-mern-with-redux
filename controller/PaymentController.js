const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Order = require("../models/OrderModel")
const key =
  "sk_test_51LnQv2IsGN4pyFcC0l8n6GiO07PoG2kfTta9jtHhblanWhA85QM7Ua0MSY96f8kmv5ocilDBujgozQrLAcxUcn6r00nvBRLvuC";
const stripe = require("stripe")(key);

exports.Payment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "usd",
    metadata: {
      company: "MERN",
    },
  });
  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
