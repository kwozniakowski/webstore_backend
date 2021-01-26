const Category = require("./Category");

exports.categories = async () => {
    return Category.find();
}