const express = require("express")
const router = express.Router()
const UserController = require('../controllers/userControllers')
const {authenticateToken} = require("../authMiddleware")
const { authValidation } = require('../helpers/validationAuth')


/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Log in user with email and password
 *     tags:
 *        - Users
 *     description: Log in user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example: {"email":"natalya@mail.ru","password":"natalya"}
 *     responses:
 *       200:
 *         description: User has been successfully logged in.
 *       400:
 *         description: Bad request.
 */

router.post('/login', authValidation, UserController.login)

/**
 * @swagger
 * /api/register:
 *   post:
 *     summary: Register user with email and password
 *     tags:
 *        - Users
 *     description: Register user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example: {"email":"natalya@mail.ru","password":"natalya"}
 *     responses:
 *       200:
 *         description: User has been successfully registered.
 *       400:
 *         description: Bad request.
 */

router.post('/register', authValidation, UserController.register)



module.exports = router