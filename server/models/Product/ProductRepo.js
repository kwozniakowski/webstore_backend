const Product = require("./Product");
exports.products = async () => {
    return Product.find();
};
exports.userById = async id => {
    return Product.findById(id);
}
exports.createUser = async payload => {
    return Product.create(payload);
}
exports.removeProduct = async id => {
    return Product.findByIdAndRemove(id);
}