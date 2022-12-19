const { DataTypes } = require("sequelize");

const db = require("../db/conn");
const Carros = require("./Carros");

const Usuarios = db.define("usuarios", {
  nome: {
    type: DataTypes.STRING,
    required: true,
  },

  email: {
    type: DataTypes.STRING,
    required: true,
  },

  senha: {
    type: DataTypes.STRING,
    required: true,
  },

  celular: {
    type: DataTypes.STRING,
    required: true,
  },
});

module.exports = Usuarios;
