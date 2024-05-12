const router = require('express').Router()

//const usersRoutes = require('./usersRoutes')
const authorization = require('./authorization')
const profileRoutes = require('./profileRoutes')
const goodRoutes = require('./goodRoutes')
const cartRoutes = require('./cartRoutes')
const orderRoutes = require('./orderRoutes')

router.use('/', authorization)
router.use('/', profileRoutes)
router.use('/', goodRoutes)
router.use('/', cartRoutes)
router.use('/', orderRoutes)


module.exports = router