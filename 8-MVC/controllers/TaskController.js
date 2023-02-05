const Task = require("../models/Task");


class TaskController {

    static async createTask(req, res) {
        // const { title, description } = req.body;

        const task = {
          title: req.body.title,
          description: req.body.description,
          done: false
        }

        console.log(task)

        await Task.create(task);

        res.send({
            messege: "Create task"
        })
    }

    static showTask(req, res) {
        res.send({
            messege: "List task"
        })
    }
}

module.exports = TaskController;

