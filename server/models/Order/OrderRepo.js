const Order = require("./Order.js");

exports.orders = async () => {
    return Order.find();
};
exports.orderById = async id => {
    return Order.findById(id);
}
exports.createOrder = async payload => {
    return Order.create(payload);
}
exports.removeOrder = async id => {
    return Order.findByIdAndDelete(id)
}
exports.updateOrder = async (filter, update) => {
    return Order.findByIdAndUpdate(filter, update)
}
exports.orderByUserId = async id => {
    console.log(id)
    return Order.find({"userId":id})
}
exports.orderByOrderId = async id => {
    console.log("id zamowienia " + id)
    return Order.find({"_id":id})
}
