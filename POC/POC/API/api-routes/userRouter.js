const express = require('express');

const jwtAuth = require('../middleware/jwtAuthentication')
const jwtTokenCreator = require('../middleware/generateToken')

const userController = require('../controllers/userController')

const userRouter = express.Router();

userRouter.use(jwtTokenCreator.createTokenWithLogin);

userRouter.route('/user')
.get(userController.login);

//const userCreateRouter = express.Router();

//userCreateRouter.route('/CreateUser').post(userController.create);

module.exports = userRouter;
//module.exports = userCreateRouter;
