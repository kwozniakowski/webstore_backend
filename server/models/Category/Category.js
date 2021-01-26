const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please include name"]
    }
})

module.exports = mongoose.model('Category',CategorySchema);