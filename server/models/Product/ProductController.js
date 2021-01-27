const productRepository = require('./ProductRepo')
exports.createProduct = async (req, res) => {
    try {
        let payload = {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            description: req.body.description,
            weight: req.body.weight,
            category: req.body.category
        }
        let product = await productRepository.createProduct(payload);
        res.status(200).json({
            status: true,
            data: product,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.getProducts = async (req, res) => {
    try {
        let products = await productRepository.products();
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

exports.getProductById = async (req, res) => {
    try {
        let id = req.params.id
        let productDetails = await productRepository.productById(id);
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
exports.removeProduct = async (req, res) => {
    try {
        let productDetails = await productRepository.removeProduct(req.params.id)
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

exports.updateProduct = async (req,res) => {
    console.log(req.body)
    try {
        let payload = {
            id: req.body.productId,
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            description: req.body.description,
            weight: req.body.weight,
            category: req.body.category
        }
        console.log("id produktu: " + payload.id)
        let products = await productRepository.productByProductId(payload.id);
        let product = products[0]
        product.quantity = parseFloat(product.quantity) - parseFloat(payload.quantity)
        await product.save()
        res.status(200).json({
            status: true,
            data: product,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}