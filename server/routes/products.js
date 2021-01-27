const express = require('express');
const router = express.Router();
const productController = require("../models/Product/ProductController");

router.post("/", productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.removeProduct);
router.put("/", productController.updateProduct);

module.exports = router;