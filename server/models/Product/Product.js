const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please include the product name"],
    },
    price: {
        type: Number,
        required: [true, "Please include the price"],
    },
    quantity: {
        type: Number,
        required: [true, "Please include the quantity"],

    },
    description: {
        type: String,
        required: [true, "Please include the description"],
    },
    versionKey: false
})

module.exports = mongoose.model('Product',ProductSchema);