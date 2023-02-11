const express = require("express");
const mongoose = require("mongoose");
const authController = require("./controllers/authController");

const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
//connect db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () => console.log("Db is connected"));

//middlewares
//  those tow are a must if you use req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//Routes
app.use("/users", authController);
app.listen(process.env.port, () =>
  console.log(process.env.port + "Server has been started")
);
