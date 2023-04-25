const mongoose = require('mongoose');

const main = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/testemongodb2");
        console.log("connected to database");
    } catch (err) {
        console.log("error connecting to database:",err);
    }

}

main();

module.exports = mongoose;