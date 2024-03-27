const express = require('express')
const app = express()
require('dotenv').config()
const sequelize = require('./config/db')
//const swaggerJSDoc = require('swagger-jsdoc');
//const swaggerUi = require('swagger-ui-express');
const router = require('./routes/index')

app.use(express.json())
app.use('/api', router)

const PORT = process.env.PORT || 3005

sequelize
 .authenticate()
 .then(() => {
   console.log('DB connected!');
   app.listen(PORT, () => {
     console.log(`Server started at ${PORT}`);
   });
 })
 .catch(err => console.log('Error connecting to the database: ', err.message));