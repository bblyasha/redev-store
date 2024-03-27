const Sequelize = require('sequelize')
const sequelize = require('../config/db')


const UsersModel = require('./UsersModel')
const UserProfileModel = require('./UserProfileModel')
const OrderModel = require('./OrderModel')
const GoodModel = require('./GoodModel')
const CartModel = require('./CartModel')
const GoodCartLinkModel = require('./GoodCartLinkModel')
const GoodOrderLinkModel = require('./GoodOrderLinkModel')

(async () => {
    try {
      await sequelize.sync({ force: true })
      console.log('⚡️ Tables synced')
    } catch (error) {
      console.error('Error syncing tables:', error)
    }
})()

UsersModel.hasOne(UserProfileModel, { foreignKey: 'user_id' })
UserProfileModel.belongsTo(UsersModel, { foreignKey: 'user_id' })
UsersModel.hasOne(CartModel, { foreignKey: 'user_id' })
CartModel.belongsTo(UsersModel, { foreignKey: 'user_id' })
UsersModel.hasMany(OrderModel, { foreignKey: 'user_id' })
OrderModel.belongsTo(UsersModel, { foreignKey: 'user_id'})
GoodModel.belongsToMany(CartModel, {through: 'GoodCartLinkModel'})
CartModel.belongsToMany(GoodModel, {through: 'GoodCartLinkModel'})
GoodModel.belongsToMany(OrderModel, {through: 'GoodOrderLinkModel'})
OrderModel.belongsToMany(GoodModel, {through: 'GoodOrderLinkModel'})



module.exports = {
    UsersModel,
    UserProfileModel,
    OrderModel,
    GoodModel,
    CartModel,
    GoodCartLinkModel,
    GoodOrderLinkModel
}
