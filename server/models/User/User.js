const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please include name"],

    },
    surname: {
        type: Number,
        required: [true, "Please include surname"],
    },
    email: {
        type: String,
        required: [true, "Please include email"],

    },
    phoneNumber: {
        type: String,
        required: [true, "Please include phone number"],
    },
})

module.exports = mongoose.model('User',UserSchema);