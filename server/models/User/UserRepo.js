const User = require("./User")
exports.users = async () => {
    return User.find();
};

exports.userById = async id => {
    return User.findById(id);
};

exports.createUser = async data => {
    return User.create(data);
};

exports.removeUser = async id => {
    return User.findByIdAndRemove(id);
};