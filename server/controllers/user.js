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
        res.status(404).send({message: 'pwd is undefined'});
    } else {
        if (password !== repeatPassword) {
            res.status(404).send({message: 'pwd is incorrect'});
        } else {
            bcrypt.hash(password, null, null, (err, hash) => {
                if (err) {
                    res.status(500).send({message: "error encryption fro user"});
                } else {
                    user.password = hash;
                    user.save((error, userStore) => {
                        if (error) {
                            res.status(500).send({message: "error save user"});
                        } else {
                            if (!userStore) {
                                res.status(404).send({message: "error save user"});
                            } else {
                                res.status(200).send({user: userStore});
                            }
                        }
                    });
                }
            })
        }
    }
}
