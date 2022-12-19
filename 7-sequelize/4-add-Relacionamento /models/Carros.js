const { DataTypes } = require("sequelize");

const db = require("../db/conn");
const Usuarios = require("./Usuarios");

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

  imagens: {
    type: DataTypes.JSON,
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

Carros.belongsTo(Usuarios);

module.exports = Carros;
