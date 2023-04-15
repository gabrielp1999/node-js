const express = require("express");
const app = express()

const conn = require("./db/conn");

app.use(express.json());



app.listen(3001, () => console.log("servidor rodando na 3001"))