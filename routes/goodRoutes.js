const router = require('express').Router();
const GoodController  = require('../controllers/goodController')
const { validateGood, validateId } = require('../helpers/validationGood')
/**
 * @swagger
 * /api/add-good:
 *   post:
 *     summary: Adding a new good.
 *     tags:
 *        - Goods
 *     description: Adding a new good.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example: {"name":"T-shirt","description":"oversize clothes", "category":"clothes", "price": "5500", "image": "base64_encoded_image_data", "amount": "20" }
 *     responses:
 *       200:
 *         description: Good has been successfully added.
 *       400:
 *         description: Bad request.
 */

router.post('/add-good', validateGood, GoodController.addGood)

/**
 * @swagger
 * /api/good/{id}:
 *   patch:
 *     summary: Updates good  with id = {id}
 *     tags:
 *        - Goods
 *     description: Updates good with id = {id}
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Good ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example: {"name": "Jacket"}
 *     responses:
 *       200:
 *         description: Good data has been successfully updated.
 *       400:
 *         description: Bad request.
 */

router.patch('/good/:id', validateId, GoodController.updateGood)

/**
 * @swagger
 * /api/good/{id}:
 *   delete:
 *     summary: Delete good with {id}
 *     tags:
 *        - Goods
 *     description: Deletes good by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Good ID.
 *     responses:
 *       200:
 *         description: Good has been successfully deleted.
 *       400:
 *         description: Bad request.
 */

router.delete('/good/:id', validateId, GoodController.deleteGood)

/**
 * @swagger
 * /api/filteredGoods:
 *   get:
 *     summary: Getting filtered goods
 *     tags:
 *        - Goods
 *     description: Getting a list of goods 
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Category to filter
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         description: Minimal price to filter
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         description: Maximum price to filter
 *     responses:
 *       200:
 *         description: Filtered goods.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Good'
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Internal server error.
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Good:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier of the good
 *         name:
 *           type: string
 *           description: Name of the good
 *         description:
 *           type: string
 *           description: Description of the good
 *         category:
 *           type: string
 *           description: Category of the good
 *         price:
 *           type: number
 *           description: Price of the good
 */

router.get('/filteredGoods', GoodController.searchGoods)

/**
 * @swagger
 * /api/goods/sortedByPrice:
 *   get:
 *     summary: Getting sorted goods by price
 *     tags:
 *        - Goods
 *     description: Getting sorted goods by price 
 *     responses:
 *       200:
 *         description: Sorted goods by price.
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Internal server error.
 */
router.get('/goods/sortedByPrice', GoodController.goodsSortedByPrice)

/**
 * @swagger
 * /api/goods/sortedByDate:
 *   get:
 *     summary: Getting sorted goods by date
 *     tags:
 *        - Goods
 *     description: Getting sorted goods by date 
 *     responses:
 *       200:
 *         description: Sorted goods by date.
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Internal server error.
 */

router.get('/goods/sortedByDate', GoodController.goodsSortedByDate)


module.exports = router