const router = require('express').Router()
const OrderController = require('../controllers/orderController')
const {authenticateToken} = require("../authMiddleware")
const { validateOrder, validateOrderId } = require('../helpers/validationOrder')

/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Create order information
 *     tags:
 *        - Order
 *     security: 
 *        - bearerAuth: []
 *     description: Creating order information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example: {"status": "pending", "deliveryAddress":"Minsk, ul. Kosmonavtov", "paymentMethod":"byCard"}
 *     responses:
 *       200:
 *         description: Order information has been successfully created.
 *       400:
 *         description: Bad request.
 */

router.post('/order', authenticateToken, validateOrder, OrderController.createOrder)

/**
 * @swagger
 * /api/order/{orderId}:
 *   patch:
 *     summary: Updates order status
 *     tags:
 *        - Order
 *     security: 
 *        - bearerAuth: []
 *     description: Updates order status.
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Order ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example: {"status":"pending"}
 *     responses:
 *       200:
 *         description: Order status has been successfully updated.
 *       400:
 *         description: Bad request.
 */

router.patch('/order/:id', authenticateToken, validateOrderId, OrderController.updateOrderStatus);

/**
 * @swagger
 * /api/order/history:
 *   get:
 *      summary: Get orders of current user
 *      tags:
 *        - Order
 *      security: 
 *        - bearerAuth: []
 *      description: Returns orders
 *      responses:
 *        200:
 *          description: Successful response
 */

router.get('/order/history', authenticateToken, OrderController.getOrders)

module.exports = router