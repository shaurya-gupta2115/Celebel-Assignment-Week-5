

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const main = require("./config/db")


// Middleware
app.use(cors());
app.use(express.json());

const InitalizeConnection = async () => {
  try {
    await main(); // main and redisClient function will run together in sequence
    console.log("DB Connected");

    app.listen(process.env.PORT, () => {
      console.log("Server listening at port number: " + process.env.PORT);
    });
  } catch (err) {
    console.log("Error: " + err);
  }
};
InitalizeConnection();
