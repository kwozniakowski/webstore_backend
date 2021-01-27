const express = require('express');
const router = express.Router();
const cartController = require("../models/Cart/CartController");
const mongoose = require('mongoose')

router.post("/add", cartController.addItemToCart);
router.post("/", cartController.getCart);
router.post("/create", cartController.createCart)
router.put("/empty-cart", cartController.emptyCart);
router.put("/update", cartController.updateCart)
router.put("/delete", cartController.removeFromCart)


module.exports = router;