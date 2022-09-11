const { DataTypes } = require("sequelize");

const db = require("../db/conn");

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

module.exports = Carros;
