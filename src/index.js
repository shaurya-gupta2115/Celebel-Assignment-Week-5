

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const main = require("./config/db");

require("dotenv").config();
const app = express()

// Middleware
app.use(express.json());
app.use(cookieParser()); // ✅ Add this before routes

// routing 
const projectRouter = require("./routes/projectRoutes");

app.use("/projectDoc", projectRouter)

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
