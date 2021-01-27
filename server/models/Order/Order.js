const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PurchaserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        length: 9,
        required: true
    }
})

const OrderStateSchema = new Schema({
    state: {
        type: String,
        required: true,
        enum: ['NIEZATWIERDZONE', 'ZATWIERDZONE', 'ANULOWANE', 'ZREALIZOWANE']
    }
})
const ItemSchema = new Schema({
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
const OrderSchema = new Schema({
    acceptDate: {
        type: Date,
        required: false
    },
    total: {
        type: Number,
        required: true
    },
    state: {
        type: OrderStateSchema,
        required: true
    },
    purchaserData: {
        type: PurchaserSchema,
        required: true
    },
    items: {
        type: [ItemSchema],
        required: true,
        default: []
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Order', OrderSchema);