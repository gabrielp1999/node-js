const conn = require("../db/conn");


class Product {
    constructor(name, description, price, image){
        this.name = name
        this.description = description
        this.price = price
        this.image = image
    }

    save(){
        const product = conn.db().collection("products").insertOne({
           name: this.name,
           description: this.description,
           price: this.price,
           image: this.image
        })

        return product;
    }

    static getAll(){
        const products = conn.db().collection("products").find().toArray();
        return products;
    }

}

module.exports = Product;