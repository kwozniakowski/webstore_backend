const express = require('express');
const router = express.Router();
const productController = require("../models/Product/ProductController");

router.post("/", productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.delete("/", productController.removeProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;