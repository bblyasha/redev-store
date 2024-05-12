const router = require('express').Router();
const UserController = require('../controllers/userControllers');
const CartController= require('../controllers/cartContoller')
const {authenticateToken} = require("../authMiddleware")
const { validateCart } = require('../helpers/validationCart')

/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Create an order in a cart
 *     tags:
 *        - Cart
 *     security: 
 *        - bearerAuth: []
 *     description: Creating an order.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example: {"goodId":"5","amount":"10"}
 *     responses:
 *       200:
 *         description: Cart information has been successfully created.
 *       400:
 *         description: Bad request.
 */

router.post('/cart', authenticateToken, validateCart, CartController.addToCart)

module.exports = router