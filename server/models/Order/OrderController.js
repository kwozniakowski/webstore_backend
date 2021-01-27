const orderRepository = require('./OrderRepo')
const cartController = require("../Cart/CartController")
exports.createOrder = async (req, res) => {
    try {
        let body = req.body
        let payload = {
            userId: body.userId,
            acceptDate: body.acceptDate,
            total: body.cart.subTotal,
            state: {state: 'NIEZATWIERDZONE'},
            purchaserData: {
                email: body.purchaserData.email,
                username: body.purchaserData.username,
                phoneNumber: body.purchaserData.phoneNumber
            },
            items: body.cart.items
        }
        let order = await orderRepository.createOrder(payload);
        res.status(200).json({
            status: true,
            data: order,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.getAllOrders = async (req, res) => {
    try {
        let products = await orderRepository.orders();
        res.status(200).json({
            status: true,
            data: products,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.getOrderById = async (req, res) => {
    try {
        let userId = req.body.userId
        let orders = await orderRepository.orderByUserId(userId);
        res.status(200).json({
            status: true,
            data: orders,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}

exports.deleteOrder = async (req, res) => {
    try {
        let order = await orderRepository.removeOrder(req.params.id)
        res.status(200).json({
            status: true,
            data: order,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}

exports.updateOrder = async (req,res) => {

    try {
        let jsonData = {
            id: req.body.id,
            state: req.body.state,
            acceptDate: req.body.acceptDate
        }
        let orders = await orderRepository.orderByOrderId(jsonData.id);
        let order = orders[0]
        order.state = {state: jsonData.state}
        if(order.state.state !== 'ANULOWANE')
        {
            order.acceptDate = jsonData.acceptDate
        }

        let data = await order.save();
        res.status(200).json({
            status: true,
            data: data,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}