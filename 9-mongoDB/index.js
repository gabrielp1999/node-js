const express = require("express");
const app = express();

const conn = require("./db/conn");
const productsRoutes = require("./routers/productsRouters");

app.use(express.json());

app.use("/products",productsRoutes);


app.listen(3001, () => console.log("servidor rodando na 3001"));