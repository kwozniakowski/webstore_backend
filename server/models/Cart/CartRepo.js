const Cart = require("./Cart");

exports.cartById = async id => {
    return Cart.findById(id);
}

exports.cartByUserId = async id => {
    return Cart.find({userId:id})
}

exports.createCart = async data => {
    return Cart.create(data)
}

exports.addItem = async payload => {
    return Cart.create(payload);
}

