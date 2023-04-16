const ProductModel = require("../models/Product");


class ProductController {

    static showProducts(req,res){
        res.send({ message: "produto", status: 200});
    }

    static createProduct(req,res){
        try {
            const { name, description, price } = req.body;
            const model = new ProductModel(name, description, price);
            model.save();
            console.log(model)

            return res.status(201).send(model);
            
        } catch (err) {
            return res.status(400).send(err)
        }

    }
}

module.exports = ProductController;