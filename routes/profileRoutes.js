const router = require('express').Router();
const UserController = require('../controllers/userControllers');
const ProfileController= require('../controllers/profileController')
const {authenticateToken} = require("../authMiddleware")
const { validateProfile, validateOptionalProfile } = require('../helpers/validationProfile')

/**
 * @swagger
 * /api/profile:
 *  get:
 *      summary: Get profile of current user
 *      tags:
 *        - Profile
 *      security: 
 *        - bearerAuth: []
 *      description: Returns profile
 *      responses:
 *        200:
 *          description: Successful response
 */

router.get('/profile', authenticateToken, ProfileController.getProfile);

/**
 * @swagger
 * /api/profile:
 *   post:
 *     summary: Create profile information
 *     tags:
 *        - Profile
 *     security: 
 *        - bearerAuth: []
 *     description: Creating profile information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example: {"name":"Natalya","surname":"Baranova", "lastname":"Dmitrievna", "phone":"+375296581253"}
 *     responses:
 *       200:
 *         description: Profile information has been successfully created.
 *       400:
 *         description: Bad request.
 */

router.post('/profile', authenticateToken, validateProfile, ProfileController.createProfile)

/**
 * @swagger
 * /api/profile:
 *   patch:
 *     summary: Updates profile information
 *     tags:
 *        - Profile
 *     security: 
 *        - bearerAuth: []
 *     description: Updates profile information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             example: {"name": "Kate"}
 *     responses:
 *       200:
 *         description: Profile has been successfully updated.
 *       400:
 *         description: Bad request.
 */

router.patch('/profile', authenticateToken, validateOptionalProfile, ProfileController.updateProfile)


module.exports = router