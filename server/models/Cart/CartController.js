const cartRepository = require('./CartRepo')
const productRepository = require('../Product/ProductRepo');

exports.addItemToCart = async (req, res) => {
    try {
        let itemData = {
            itemId: req.body.itemId,
            quantity: req.body.quantity
        }

        let productDetails = await productRepository.productById(itemData.itemId);
        if (!productDetails) {
            return res.status(500).json({
                type: "Not Found",
                msg: "Invalid request"
            })
        }

        let cart
        let carts = await cartRepository.cartByUserId(req.body.userId);
        const productId = itemData.itemId;
        const quantity = itemData.quantity;
        if(carts.length && carts.length > 0){
            cart = carts[0]
            const indexFound = cart.items.findIndex(item => item.productId._id.toString() === productId.toString());
            //------this removes an item from the the cart if the quantity is set to zero,We can use this method to remove an item from the list  -------
            if (indexFound !== -1 && quantity <= 0) {
                cart.items.splice(indexFound, 1);
                if (cart.items.length === 0) {
                    cart.subTotal = 0;
                } else {
                    cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
                }
            }
            //----------check if product exist,just add the previous quantity with the new quantity and update the total price-------
            else if (indexFound !== -1) {
                cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity;
                cart.items[indexFound].total = cart.items[indexFound].quantity * productDetails.price;
                cart.items[indexFound].price = productDetails.price
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
            }
            //----Check if Quantity is Greater than 0 then add item to items Array ----
            else if (quantity > 0) {
                cart.items.push({
                    name: productDetails.name,
                    productId: productId,
                    quantity: quantity,
                    weight: productDetails.weight,
                    price: productDetails.price,
                    category: productDetails.category,
                    total: productDetails.price * quantity
                })
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
            }
        }
        else {
            console.log("Tworzę koszyk")
            let data = {"userId" : req.body.userId.toString()}
            cart = await cartRepository.createCart(data)
            if (quantity > 0) {
                cart.items.push({
                    name: productDetails.name,
                    productId: productId,
                    quantity: quantity,
                    weight: productDetails.weight,
                    price: productDetails.price,
                    category: productDetails.category,
                    total: productDetails.price * quantity
                })
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
            }
        }

        await cart.save();
        res.status(200).json({
            type: "success",
            mgs: "Process Successful",
            data: cart
        })

    }

    catch (e) {
        console.log(e)
        res.status(400).json({
            type: "Invalid",
            msg: "Something went wrong",
            err: e
        })
    }

}

exports.getCart = async (req, res) => {
    try {
        console.log(req.body.userId)
        let carts = await cartRepository.cartByUserId(req.body.userId)
        let cart = carts[0]
        if (!cart) {
            let data = {"userId": req.body.userId.toString()}
            cart = cartRepository.createCart(data)
            if(cart){
                return res.status(200).json({
                    status: true,
                    data: cart
                })
            }
            return res.status(400).json({
                status: false,
                type: "Invalid",
                msg: "Cart Not Found",
            })
        }
        res.status(200).json({
            status: true,
            data: cart
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            type: "Invalid",
            msg: "Something Went Wrong",
            err: err
        })
    }
}

exports.createCart = async (req, res) => {
    try {
        let data = {
            userId: req.body.userId,
            items: []
        }
        let cart = await cartRepository.createCart(data);
        res.status(200).json({
            status: true,
            data: cart,
            type: "success"
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.emptyCart = async (req, res) => {
    try {
        let carts = await cartRepository.cart();
        let cart = carts[0];
        cart.items = [];
        cart.subTotal = 0
        let data = await cart.save();
        res.status(200).json({
            type: "success",
            mgs: "Cart Has been emptied",
            data: data
        })
    } catch (err) {
        console.log(err)
        res.status(400).json({
            type: "Invalid",
            msg: "Something Went Wrong",
            err: err
        })
    }
}