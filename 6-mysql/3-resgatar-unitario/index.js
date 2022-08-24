const express = require("express");
const app = express();
const port = 3001;
var bodyParser = require("body-parser");
const mysql = require("mysql2");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// rota api ok
app.get("/", (req, res) => {
  res.send("api rodando");
});
// rota para pegar todos livros do banco
app.get("/books", (req, res) => {
  const query = "SELECT * FROM books";

  conn.query(query, (err, data) => {
    if (err) {
      console.log("Erro ao conectar ao mysql", err);
      return;
    }

    const books = data;

    res.status(200).send(books);
  });
});

// rota para cadastrar livro no banco
app.post("/book", (req, res) => {
  const title = req.body.title;
  const pageqty = req.body.pageqty;

  if (!title || !pageqty) {
    res.status(400).send("Dados Inválido");
    return;
  }

  const query = `INSERT INTO books (title, pageqty) VALUES ('${title}','${pageqty}')`;

  conn.query(query, (err) => {
    if (err) {
      console.log("Erro ao conectar ao mysql", err);
      return;
    }
  });
  res.status(200).send("Dados enviado");
});

// rota para pegar um livro por id
app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  const query = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(query, (err, data) => {
    if (err) {
      console.log("Erro ao conectar ao mysql", err);
      return;
    }

    const book = data[0];
    res.status(200).send(book);
  });
});

app.get("/books/edit/:id", (req, res) => {
  const id = req.params.id;

  const query = `SELECT * FROM books WHERE id = ${id}`;

  conn.query(query, function (err, data) {
    if (err) {
      console.log(err);
    }

    const book = data[0];

    console.log(book);
    res.send(book);
  });
});

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "96191319@Bc",
  database: "nodemysql",
});

conn.connect((err) => {
  if (err) {
    console.log("Erro ao conectar ao mysql", err);
    return;
  }
  console.log("Conectado com sucesso ao mysql!");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
