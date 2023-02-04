const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc2", "root", "96191319", {
    host: "localhost",
    dialect: "mysql"
});

try{
    sequelize.authenticate();
    console.log("Conectado ao MySql!")
} catch(error){
    console.log(`Não foi possivel conectar ${error}`)
}

exports.default = sequelize;