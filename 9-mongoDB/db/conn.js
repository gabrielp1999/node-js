const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/testemongodb2";

const client = new MongoClient(url);

const run = async () => {
    try{
        await client.connect();
        console.log("conectado ao mongoDB");
    }catch(err){
        console.log("erro", err);
    }

}

run();

module.exports = client;
