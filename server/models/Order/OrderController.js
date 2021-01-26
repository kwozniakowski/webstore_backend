const orderRepository = require('./OrderRepo')

exports.createOrder = async (req, res) => {
    try {
        let body = req.body
        let payload = {
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

exports.getOrder = async (req, res) => {
    try {
        let id = req.params.id
        let productDetails = await orderRepository.orderById(id);
        res.status(200).json({
            status: true,
            data: productDetails,
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
        let data = {
            id: req.body.id,
            //TODO: dane ordera
        }
        let order = await orderRepository.updateOrder(data.id, data);
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