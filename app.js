const express = require('express');
const mongoose = require('mongoose');
const app = express();

const productsRoute = require('./routes/products');
const cartRoute = require('./routes/products');
const bodyParser = require("body-parser");

app.get('/',(req, res) => {
    console.log("Jebac Pis!");
})

app.use('/products', productsRoute);
app.use('/cart', cartRoute);
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:admin@webstore.kizcv.mongodb.net/webstore?retryWrites=true&w=majority',{ useNewUrlParse: true } ,() => {
    console.log("Connected to DB!");
})

app.listen(8080);