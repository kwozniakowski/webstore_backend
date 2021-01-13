const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

//GETS ALL PRODUCTS
router.get('/',async (req, res) => {
    console.log("Zwracam wszystkie produkty");
    const products = await Product.find();
    res.json(products);
})

//GETS PARTICULAR PRODUCT
router.get('/:product_id',async (req, res) => {
    console.log("Zwracam produkt o id ",req.params.product_id);
    try{
        const product = await Product.findById(req.params.product_id);
        res.json(product);
    }
    catch(err){
        res.json({message: err});
    }

})

module.exports = router;