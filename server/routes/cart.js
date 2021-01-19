const express = require('express');
const router = express.Router();
const cartController = require("../models/Cart/CartController");
const mongoose = require('mongoose')

router.post("/", cartController.addItemToCart);
router.get("/", cartController.getCart);
router.post("/create", cartController.createCart)
router.delete("/empty-cart", cartController.emptyCart);

module.exports = router;