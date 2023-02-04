const express = require("express");

const app = express();

app.use(express.json())

const conn = require("./db/conn");

const Task = require("./models/Task");

conn
.sync()
.then(() => {
    app.listen(3001, () => {
        console.log("-- servidor rodando na 3001 --")
    })
})
.catch((err)=> console.log(err));

