import {Item} from "../Cart/Cart";

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
        type: [Item],
        required: true,
        default: []
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Order', OrderSchema);