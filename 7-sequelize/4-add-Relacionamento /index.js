const express = require("express");
const { where } = require("sequelize");
const app = express();

const conn = require("./db/conn");

const Carros = require("./models/Carros");
const Users = require("./models/Users");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("api ok");
});

app.post("/carros/cadastrar", async (req, res) => {
  console.log(req.body);
  const userId = req.body.userId;
  const imagens = req.body.imagens;
  const marca = req.body.marca;
  const modelo = req.body.modelo;
  const ano = req.body.ano;
  const km = req.body.km;
  const motor = req.body.motor;
  const descricao = req.body.descricao;
  const valor = req.body.valor;

  await Carros.create({
    userId,
    imagens,
    marca,
    modelo,
    ano,
    valor,
    km,
    descricao,
    motor,
  });

  res.status(200).send("Carro Cadastrado com Sucesso");
});

app.get("/carros/:id", async (req, res) => {
  const id = req.params.id;
  const carro = await Carros.findOne({ where: { id: id } });

  console.log(carro);
  res.status(200).send({ status: 200, data: carro });
});

app.get("/carros/", async (req, res) => {
  const carros = await Carros.findAll({ raw: true });

  console.log(carros);
  res.status(200).send({ status: 200, data: carros });
});

app.post("/carros/deletar/:id", async (req, res) => {
  const id = req.params.id;
  await Carros.destroy({ where: { id: id } });

  res.status(200).send({ status: 200, mensagem: "Apagado com sucesso" });
});

app.post("/carros/editar/:id", async (req, res) => {
  const id = req.params.id;
  const carro = await Carros.findOne({ raw: true, where: { id: id } });

  res.status(200).send({ status: 200, data: carro });
});

app.post("/carros/update", async (req, res) => {
  const id = req.body.id;
  const imagens = req.body.imagens;
  const marca = req.body.marca;
  const modelo = req.body.modelo;
  const ano = req.body.ano;
  const km = req.body.km;
  const motor = req.body.motor;
  const descricao = req.body.descricao;
  const valor = req.body.valor;

  const dadosCarro = {
    id,
    imagens,
    marca,
    modelo,
    ano,
    valor,
    km,
    descricao,
    motor,
  };

  await Carros.update(dadosCarro, { where: { id: id } });

  res.status(200).send({ status: 200, mensagem: "Atualizado com sucesso" });
});

app.post("/usuarios/cadastrar", async (req, res) => {
  console.log(req.body);
  const nome = req.body.nome;
  const email = req.body.email;
  const celular = req.body.celular;
  const senha = req.body.senha;

  await Users.create({
    nome,
    email,
    celular,
    senha,
  });

  res.status(200).send("Usuário Cadastrado com Sucesso");
});

conn
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(3001);
  })
  .catch((err) => console.log(err));
