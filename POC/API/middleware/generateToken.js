let express = require('express')
let jwt = require('jsonwebtoken')
const config = require('../configJwt')

var userController = require('../controllers/userController')

let createTokenWithLogin = (req, res, next) =>
{
    let userName = req.body.UserName;
    let password = req.body.Password;

    
    userController.getUserByUserName(userName, password)    

    .then(user => {
        if (user.status == 'success')
        {
            if(userName == user.data.UserName && password == user.data.Password)
            {
                let jwtToken = jwt.sign(config.payload, config.privateKey, config.signOptions);
                req.decoded = {
                    success: true,
                    message: 'Authentication Successful',
                    token: jwtToken
                };
                next();
            }
            else
            {
                return res.send(400).json({
                    success : false,
                    message : 'wrong user and password'
                });
            }
        }
    });
}

exports.createTokenWithLogin = createTokenWithLogin;


