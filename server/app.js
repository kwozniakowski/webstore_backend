const express = require('express');
const cors = require('cors')
const connect = require('./config/mongooose')

const app = express();
const productsRoute = require('./routes/products');
const cartRoute = require('./routes/cart');
const userRoute = require('./routes/user');

const bodyParser = require("body-parser");


app.get('/',(req, res) => {
})

app.use(cors())
app.use(express.json())
app.use('/api/products', productsRoute);
app.use('/api/cart', cartRoute);
app.use('/api/user', userRoute);
app.use(bodyParser.json());
app.set('port', 3000)

connect()

app.listen(3000);