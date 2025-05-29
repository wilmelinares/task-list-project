const { Router } = require("express");
const {
  getAllTask,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks.controllers");
const router = Router();

//Get a list with all the task
router.get("/tasks", getAllTask);

//Get a specific task by id
router.get("/tasks/:id", getTask);

//Create a new task
router.post("/tasks", createTask);

//Delete a task
router.delete("/tasks/:id", deleteTask);

//Update a existing task
router.put("/tasks/:id", updateTask);

module.exports = router;
