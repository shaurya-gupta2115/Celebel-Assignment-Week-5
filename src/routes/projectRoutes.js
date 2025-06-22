// routes/projectRoutes.js
const express = require("express");
const projectRouter = express.Router();
const Project = require("../models/Project");


const {create , readAll , singleRead, update , deleteDoc } = require("../controllers/projectRoutesControllers")

// CREATE
projectRouter.post("/", create);
// READ ALL
projectRouter.get("/", readAll);
// READ SINGLE
projectRouter.get("/:id", singleRead);
// UPDATE
projectRouter.put("/:id", update);
//DELETE
projectRouter.delete("/:id", deleteDoc);

module.exports = projectRouter;
