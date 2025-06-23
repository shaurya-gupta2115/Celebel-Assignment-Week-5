const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const main = require("./config/db");
const projectRouter = require("./projectRoutes");

require("dotenv").config();
const app = express()

// Middleware
app.use(express.json());
app.use("/projectDoc", projectRouter);

const InitalizeConnection = async () => {
  try {
   main(); 
    console.log("DB Connected");

    const PORT = process.env.PORT || 7000;
    app.listen(PORT, () => {
      console.log("Server listening at port number: " + PORT);
    });
  } catch (err) {
    console.log("Error: " + err);
  }
};
InitalizeConnection();
