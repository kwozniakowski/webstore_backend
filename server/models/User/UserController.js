const userRepository = require('./UserRepo')
const cartRepository = require('../Cart/CartRepo')

exports.login = async (req,res) => {
    try {
        let data = {
            login: req.body.login,
            password: req.body.password
        }
        let user = await userRepository.loginUser({
            ...data
        });
        res.status(200).json({
            status: true,
            data: user,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.createUser = async (req, res) => {
    try {
        let data = {
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber
        }
        let user = await userRepository.createUser({
            ...data
        });

        let userData = {
            UserId: user._id
        }

        let cart = await cartRepository.createCart({...
            userData
        });

        res.status(200).json({
            status: true,
            data: user,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.getUsers = async (req, res) => {
    try {
        let users = await userRepository.users();
        res.status(200).json({
            status: true,
            data: users,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

