const Sequelize = require('sequelize')
const sequelize = require('../config/db')


const UsersModel = require('./UsersModel')
const UserProfileModel = require('./UserProfileModel')
const OrderModel = require('./OrderModel')
const GoodModel = require('./GoodModel')
const CartModel = require('./CartModel')
const GoodCartLinkModel = require('./GoodCartLinkModel')
const GoodOrderLinkModel = require('./GoodOrderLinkModel');
//const PaymentModel = require('./PaymentModel')


UsersModel.hasOne(UserProfileModel, { foreignKey: 'userId' })
UserProfileModel.belongsTo(UsersModel, { foreignKey: 'userId' })
UsersModel.hasOne(CartModel, { foreignKey: 'userId' })
CartModel.belongsTo(UsersModel, { foreignKey: 'userId' })
GoodModel.belongsToMany(CartModel, { through: 'linksGoodCarts' })
CartModel.belongsToMany(GoodModel, { through: 'linksGoodCarts' })
GoodModel.belongsToMany(OrderModel, { through: 'linksGoodOrders' })
OrderModel.belongsToMany(GoodModel, { through: 'linksGoodOrders' });


// (async () => {
//   try {
//     await sequelize.sync({ force: true })
//     console.log('⚡️ Tables synced')
//   } catch (error) {
//     console.error('Error syncing tables:', error)
//   }
// })()


module.exports = {
    UsersModel,
    UserProfileModel,
    OrderModel,
    GoodModel,
    CartModel,
    GoodCartLinkModel,
    GoodOrderLinkModel
}
