const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/TaskController");

router.post("/create", TaskController.createTask);
router.get("/", TaskController.showTask)


module.exports = router;