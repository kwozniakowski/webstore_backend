const express = require('express');
const router = express.Router();
const categoryController = require("../models/Category/CategoryController");
const mongoose = require('mongoose')

router.get("/", categoryController.getAllCategories);


module.exports = router;