const pgDb = require('pg')
const db = require('../config/db')
const { Sequelize } = require('sequelize')
const UsersModel = require('./UsersModel')
const GoodModel = require('./GoodModel')

const Cart = db.define(
    'carts',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        amount: {
            type: Sequelize.INTEGER,
            allowNull: true    
        },
        summedPrice: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: UsersModel,
                key: 'id'
            }
        },
        goodId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: GoodModel,
                key: 'id'
            }
        }
    })

module.exports = Cart;