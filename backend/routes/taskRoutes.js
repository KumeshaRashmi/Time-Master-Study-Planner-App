// routes/taskRoutes.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

// Get all tasks
router.get("/tasks", taskController.getTasks);

// Add a new task
router.post("/tasks", taskController.addTask);

// Toggle task completion
router.put("/tasks/:id/toggle", taskController.toggleTask);

// Delete a task
router.delete("/tasks/:id", taskController.deleteTask);

module.exports = router;
