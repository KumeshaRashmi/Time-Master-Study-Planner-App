// models/Task.js
const mongoose = require("mongoose");

// Define Task schema
const taskSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    completed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Create the model from the schema
const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
