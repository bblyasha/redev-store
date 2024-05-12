const { Model } = require('sequelize');
const { UsersModel } = require('../models/model');
const { GoodModel } = require('../models/model')
const { Op } = require('sequelize');

class GoodService {
    #COLLECTION = 'goods'
    async addGood(goodData) {
        try {
            const newGood = await GoodModel.create(goodData);
            return newGood;
        } catch (error) {
            console.error('Error adding good:', error);
        }
    }
    async deleteGoodById(id) {
        try {
            const deletedGood = await GoodModel.destroy({
                where: {
                    id: id
                }
            });
            return deletedGood;
        } catch (error) {
            console.error('Error deleting good:', error);
        }
    }

    async updateGoodById(id, newData) {
        try {
            const updatedGood = await GoodModel.update(newData, {
                where: {
                    id: id
                }
            });
            return updatedGood;
        } catch (error) {
            console.error('Error updating good:', error);
        }
    }

    async searchGoods(category, minPrice, maxPrice) {
        try {
            let whereCondition = {};
            if (category) {
                whereCondition.category = category;
            }
            if (minPrice && maxPrice) {
                whereCondition.price = {
                    [Op.between]: [minPrice, maxPrice]
                };
            } else if (minPrice) {
                whereCondition.price = {
                    [Op.gte]: minPrice
                };
            } else if (maxPrice) {
                whereCondition.price = {
                    [Op.lte]: maxPrice
                };
            }
            const foundGoods = await GoodModel.findAll({
                where: whereCondition
            });
            return foundGoods;
        } catch (error) {
            console.error('Error searching goods:', error);
        }
    }

    async goodsSortedByPrice() {
        try {
            const sortedGoods = await GoodModel.findAll({
                order: [['price', 'ASC']]
            });
            return sortedGoods;
        } catch (error) {
            console.error('Error fetching goods sorted by price:', error);
        }
    }

    async goodsSortedByDate() {
        try {
            const sortedGoods = await GoodModel.findAll({
                order: [['createdAt', 'DESC']]
            });
            return sortedGoods;
        } catch (error) {
            console.error('Error fetching goods sorted by date:', error);
        }
    }

}

module.exports = new GoodService