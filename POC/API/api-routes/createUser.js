const express = require('express');

const userController = require('../controllers/userController')

const userRoute = express.Router();

  
userRoute.route('/user').post(userController.create);

module.exports = userRoute;

