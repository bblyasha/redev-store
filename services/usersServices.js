const { Model } = require('sequelize');
const { UsersModel } = require('../models/model');

class UserService {
    #COLLECTION = 'users'
    
    async createUser(user) {
    try {
        const newUser = new UsersModel(user);
        return await newUser.save();
    } catch (error) {
        console.error('Error creating user:', error);
        }
    }

    async getOneUser(email) {
        try {
            return await UsersModel.findOne({where: { email } });
        } catch (error) {
            console.error('Error finding user:', error);
        }
    }

}

module.exports = new UserService