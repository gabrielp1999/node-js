const express = require("express");

const app = express();

app.use(express.json())

const conn = require("./db/conn");


app.listen(3001, () => {
    console.log("-- servidor rodando na 3001 --")
})