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

exports.addItem = async (cart,payload) => {
    return Cart.updateOne(cart,{ $push: { items: payload }} )
}

