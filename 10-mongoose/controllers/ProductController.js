const ProductModel = require("../models/Product");


class ProductController {

    static async showProducts(req,res){
        const products = await ProductModel.find({});
        console.log(products);
        res.send({ status: 200, produtos: products});
    }

    static async createProduct(req,res){
        try {
            const { name, description, price, image } = req.body;

            const product = new ProductModel({ name, description, price, image });
            await product.save();

            console.log(product)

            return res.status(201).send(product);
            
        } catch (err) {
            return res.status(400).send(err)
        }

    }

    static async getProduct(req,res){
        const id = req.params.id;
        const product = await ProductModel.findById(id);
        console.log("produto by id", product)
        
        return res.send(product);
    }


    static async deleteProduct(req,res){
        const id = req.params.id;
        console.log("id deletado", id)
        await ProductModel.deleteOne({_id: id})

        return res.send({ message: "Excluido com sucesso", status: 200});
    }


    static async editProduct(req,res){
        const {  
            id,
            name,
            description,
            price,
            image
        } = req.body;

        const product = {name,description,price,image};
        
        await ProductModel.updateOne({_id: id}, product)
        return res.send({message:"Editado com succeso", status: 200});
    }

}

module.exports = ProductController;