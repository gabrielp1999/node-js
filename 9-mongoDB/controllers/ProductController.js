const ProductModel = require("../models/Product");


class ProductController {

    static async showProducts(req,res){
        const products = await ProductModel.getAll();
        res.send({ produtos: products, status: 200});
    }

    static createProduct(req,res){
        try {
            const { name, description, price, image } = req.body;
            const model = new ProductModel(name, description, price, image);
            model.save();
            console.log(model)

            return res.status(201).send(model);
            
        } catch (err) {
            return res.status(400).send(err)
        }

    }
}

module.exports = ProductController;