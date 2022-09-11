const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("carros", "root", "96191319@Bc", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Conectamos com o Sequelize!");
} catch (error) {
  console.error("Não foi possível conectar:", error);
}

module.exports = sequelize;
