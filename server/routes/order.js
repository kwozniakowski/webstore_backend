const express = require('express');
const router = express.Router();
const productController = require("../models/Order/OrderController");

router.post("/", productController.createOrder);
router.get("/", productController.getAllOrders);
router.get("/:id", productController.getOrder);
router.delete("/:id", productController.deleteOrder);
router.put("/:id", productController.updateOrder);

module.exports = router