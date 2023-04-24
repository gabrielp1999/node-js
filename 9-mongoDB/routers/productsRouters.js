const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.showProducts);
router.post("/create", ProductController.createProduct);
router.get("/:id", ProductController.getProduct);


module.exports = router;