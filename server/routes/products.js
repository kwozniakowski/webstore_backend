const express = require('express');
const router = express.Router();
const productController = require("../models/Product/ProductController");

router.post("/", productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.removeProduct);
module.exports = router;

module.exports = router;