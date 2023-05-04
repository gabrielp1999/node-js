const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.showProducts);
router.post("/create", ProductController.createProduct);
router.get("/:id", ProductController.getProduct);
router.get("/delete/:id", ProductController.deleteProduct);
// router.post("/edit", ProductController.editProduct);


module.exports = router;