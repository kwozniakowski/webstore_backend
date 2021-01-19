const express = require('express');
const router = express.Router();
const userController = require("../models/User/UserController");
const mongoose = require('mongoose')

router.get("/", userController.getUsers);
router.post("/create", userController.createUser)
router.post("/login", userController.login)

module.exports = router;