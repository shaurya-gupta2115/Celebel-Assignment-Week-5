const Project = require("../models/Project");

const create = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const readAll = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(201).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const singleRead = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Not found" });
    res.status(201).json({project});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const update = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDoc = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { deleteDoc, update, singleRead, readAll, create };
