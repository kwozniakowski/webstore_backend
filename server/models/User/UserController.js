const userRepository = require('./UserRepo')
const cartController = require('../Cart/CartController')

exports.login = async (req,res) => {
    try {
        let data = {
            username: req.body.login,
            password: req.body.password
        }
        let users = await userRepository.loginUser({
            ...data
        });
        if(users.length === 1){
            res.status(200).json({
                data: users[0],
                status: true,
            })
        }
        else{
            res.status(403).json({
                error: "Nieprawidłowy login lub hasło",
                status: false,
            })
        }

    } catch (err) {
        res.status(400).json({
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

        req.user = user

        //let cart = await cartController.createCart(data);
        //console.log(cart)

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

