const Product = require("./Product");
exports.products = async () => {
    return Product.find();
};
exports.productById = async id => {
    return Product.findById(id);
}
exports.createProduct = async payload => {
    return Product.create(payload);
}
exports.removeProduct = async id => {
    return Product.findByIdAndDelete(id,function (err) {
        if(err) console.log(err);
        console.log("Successful deletion")})
};
exports.productByProductId = async id => {
    return Product.find({"_id":id});
}