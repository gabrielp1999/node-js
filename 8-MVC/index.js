const express = require("express");

const conn = require("./db/conn");
const Task = require("./models/Task");

const taskRoutes = require("./routers/tasksRoutes");

const app = express();

app.use(express.json())

app.use("/task",taskRoutes);



conn
.sync()
.then(() => {
    app.listen(3001, () => {
        console.log("-- servidor rodando na 3001 --")
    })
})
.catch((err)=> console.log(err));

