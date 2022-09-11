const { DataTypes } = require("sequelize");

const db = require("../db/conn");
const Users = require("./Users");

const Carros = db.define("carros", {
  marca: {
    type: DataTypes.STRING,
  },
  modelo: {
    type: DataTypes.STRING,
  },
  ano: {
    type: DataTypes.STRING,
  },
  valor: {
    type: DataTypes.STRING,
  },
  imagem: {
    type: DataTypes.STRING,
  },
  descricao: {
    type: DataTypes.STRING,
  },
  km: {
    type: DataTypes.STRING,
  },
  motor: {
    type: DataTypes.STRING,
  },
});

Carros.belongsTo(Users);

module.exports = Carros;
