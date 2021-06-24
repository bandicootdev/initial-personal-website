const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
const User = require('../models/user');

module.exports.signUp = async (req, res) => {
    const user = new User();
    const {name, lastName, email, password, repeatPassword} = req.body;
    user.name = name;
    user.lastName = lastName;
    user.email = email;
    user.role = 'admin';
    user.active = false;
    if (!password || !repeatPassword) {
        res.status(400).json({message: 'pwd is undefined'});
    } else {
        if (password !== repeatPassword) {
            res.status(400).json({message: 'pwd is incorrect'});
        } else {
            bcrypt.hash(password, null, null, (err, hash) => {
                if (err) {
                    res.status(500).json({message: "error encryption fro user"});
                } else {
                    user.password = hash;
                    user.save((error, userStore) => {
                        if (error) {
                            if (error.code === 11000) {
                                res.status(400).json({message: `already before register User`});
                            } else {
                                res.status(400).json({message: "error save user"});
                            }
                        } else {
                            if (!userStore) {
                                res.status(400).json({message: "error save user"});
                            } else {
                                res.status(200).json({message: 'User registration successfully', user: userStore});
                            }
                        }
                    });
                }
            })
        }
    }
}
