const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
    weight: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})

const CartSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    items: [ItemSchema],
    subTotal: {
        default: 0,
        type: Number
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Cart', CartSchema);
module.exports = mongoose.model('Item', ItemSchema);