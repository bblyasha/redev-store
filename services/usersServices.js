const { Model } = require('sequelize');
const { UsersModel } = require('../models/model');

class UserService {
    #COLLECTION = 'users'
    async getUsers() {
    try {
        const users = await UsersModel.findAll();
        return users
    } catch (error) {
        console.error('Error getting users:', error);
    }
  }
}

module.exports = new UserService