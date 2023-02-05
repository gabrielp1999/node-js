const Task = require("../models/Task");


class TaskController {

    createTask(req, res) {
        res.send({
            messege: "Hello World"
        })
    }
}

module.exports = TaskController;

