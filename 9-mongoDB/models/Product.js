const conn = require("../db/conn");


class Product {
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
    }

    save(){
        const product = conn.db().collection("products").insertOne({
           name: this.name,
           description: this.description,
           price: this.price
        })

        return product;
    }

}

module.exports = Product;