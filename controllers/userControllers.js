const UserService = require('../services/usersServices')
const { UsersModel } = require('../models/model');
const { use } = require('../routes');
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

class UserController {
    async login(req,res) {
        const { email, password } = req.body;
        try {
            const user = await UserService.getOneUser(email)
            if (user) {
                const compareUser = await bcrypt.compare(password, user.password)
                const id = user.id
                if (compareUser) {
                    const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET)
                    res.send({ token });
                } else {
                    res.status(401).send('Incorrect login or password');
                }
            } else {
                res.status(404).send('User not found');
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).send('Internal Server Error');
        }

    }

    async register(req,res) {
        const { email, password } = req.body;
        try {
            const existingUser = await UserService.getOneUser(email)
            if (!existingUser) {
                const saltRounds = 10; 
                const hashPass = await bcrypt.hash(password, saltRounds);
                const newUser = new UsersModel({
                email,
                password: hashPass
            });
            const createdUser = await newUser.save();
            res.send(createdUser);
        } else {
            res.status(400).send('User already exists');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error'); 
    }
    }
}

module.exports = new UserController