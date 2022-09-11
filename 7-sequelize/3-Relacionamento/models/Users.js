const { DataTypes } = require("sequelize");

const db = require("../db/conn");
const Carros = require("./Carros");

const Users = db.define("users", {
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

module.exports = Users;
