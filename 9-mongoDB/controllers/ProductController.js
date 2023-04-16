const ProductModal = require("../models/Product");


class ProductController {
    static showProducts(req,res){
        res.send({ message: "produto", status: 200});
    }
}

module.exports = ProductController;