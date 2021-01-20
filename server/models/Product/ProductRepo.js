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
    return Product.findByIdAndRemove(id);
}
exports.editProduct = async (filter,update) => {
    return Product.findOneAndUpdate(filter,update);
}