const Cart = require("./Cart");

exports.cartById = async id => {
    return Cart.findById(id);
}

exports.cartByUserId = async id => {
    console.log(id)
    return Cart.find({"userId":id})
}

exports.createCart = async data => {
    data["items"] = []
    return Cart.create(data)
}

exports.findItemById = async (id, cart) => {
    for(let x in cart.items){
        if(cart.items[x].productId.toString() === id.toString()) {
            return cart.items[x]
        }
    }
}

exports.addItem = async (cart,payload) => {
    return Cart.updateOne(cart,{ $push: { items: payload }} )
}


