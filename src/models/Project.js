// models/Project.js
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    link: String,

  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
