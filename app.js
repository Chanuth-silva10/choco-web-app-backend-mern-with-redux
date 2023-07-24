/** @format */

const express = require("express");
const app = express();
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(cookieParser());


app.use("/api/v2", user);





module.exports = app;
