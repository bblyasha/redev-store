const UserService = require('../services/usersServices')
const { UsersModel } = require('../models/model');
const { use } = require('../routes');
const { Model } = require("sequelize");

class UserController {
    async getAllUsers(req,res) {
        try {
            const users = await UserService.getUsers()
            res.send(users)
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new UserController