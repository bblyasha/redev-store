const { use } = require('../routes');
const { Model } = require("sequelize");
const GoodService = require('../services/goodService')

class GoodController {
    async addGood(req, res) {
        try {
            const goodData = req.body;
            const newGood = await GoodService.addGood(goodData);
            res.send(newGood);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    async deleteGood(req, res) {
        try {
            const id = req.params.id;
            const deletedGood = await GoodService.deleteGoodById(id);
            if (deletedGood === 1) {
                res.send({ message: 'Good deleted successfully' });
            } else {
                res.status(404).send('Good not found or not deleted');
            }
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    async updateGood(req, res) {
        try {
            const id = req.params.id;
            const newData = req.body;
            const updatedGood = await GoodService.updateGoodById(id, newData);
            if (updatedGood[0] === 1) {
                res.send('Good updated successfully');
            } else {
                res.status(404).send('Good not found or not updated');
            }
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    async searchGoods(req, res) {
        try {
            const { category, minPrice, maxPrice } = req.query;
            const foundGoods = await GoodService.searchGoods(category, minPrice, maxPrice);
            res.send(foundGoods);
        } catch (error) {
            console.error('Error searching goods:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    async goodsSortedByPrice(req, res) {
        try {
            const sortedGoods = await GoodService.goodsSortedByPrice();
            res.send(sortedGoods);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    async goodsSortedByDate(req, res) {
        try {
            const sortedGoods = await GoodService.goodsSortedByDate();
            res.send(sortedGoods);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }
}

module.exports = new GoodController