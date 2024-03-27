const router = require('express').Router();
const UserController = require('../controllers/usersControllers');

router.get('/get-user', UserController.getAllUsers);

module.exports = router