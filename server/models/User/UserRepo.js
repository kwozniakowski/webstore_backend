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

exports.loginUser = async data => {
    console.log(data)
    return User.find({"username": data.username, "password": data.password});
}

exports.removeUser = async id => {
    return User.findByIdAndRemove(id);
};