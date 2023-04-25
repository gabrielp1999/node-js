const conn = require("../db/conn");
const { ObjectId } = require("mongodb");


class Product {
    constructor(name, description, price, image){
        this.name = name
        this.description = description
        this.price = price
        this.image = image
    }

    save(){
        const newProduct = {
            name: this.name,
            description: this.description,
            price: this.price,
            image: this.image
        };
        const product = conn.db().collection("products").insertOne(newProduct)

        return product;
    }

    static getAll(){
        const products = conn.db().collection("products").find().toArray();
        return products;
    }

    static async getProductById(id){

        const product = await conn
            .db()
            .collection("products")
            .findOne({_id: new ObjectId(id)});

        return product;
    }

    static async deleteProductById(id){

        const product = await conn
        .db()
        .collection("products")
        .deleteOne({_id: new ObjectId(id)});

        return product;
    }

    updateProduct(id){
        const query = {$set: this};
        conn.db().collection("products").updateOne({_id: new ObjectId(id)}, query)
    }

}

module.exports = Product;