const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    username: {
        type: String,
        required: [true, "Please include username"],
    },
    password: {
        type: String,
        required: [true, "Please include password"],

    },
    name: {
        type: String,
        required: [true, "Please include name"],

    },
    surname: {
        type: String,
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