// routes/projectRoutes.js
const express = require("express");
const projectRouter = express.Router();
const Project = require("./models/Project");

// CREATE
projectRouter.post("/", async (req, res) => {
  try {
    console.log("📥 POST /projectDoc hit with:", req.body);
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    console.error("DB Error:", error.message);
    res.status(500).json({ message: error.message });
  }
});

// READ ALL
projectRouter.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ SINGLE
projectRouter.get("/:id", async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Not found" });
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE
projectRouter.put("/:id", async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE
projectRouter.delete("/:id", async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = projectRouter;
