const express = require('express');
const mongoose = require('mongoose');
var User = mongoose.model('User');
var jwtGenerator = require('../middleware/generateToken')

exports.login = function(req, res){
    debugger;
    User.findOne({UserName: req.body.UserName} , function(err, user){
        if(err)
        {
            res.json({
                status:'error',
                message: err
            });
        }
        else
        {           
            debugger; 
            res.json({
                status:'success',
                data: user,
                token: req.decoded.token                
            });
        }
    });
}

exports.create = function(req, res){
    let user = new User();
    user.UserName = req.body.UserName;
	user.Password = req.body.Password;
    
    user.save(function(err, user){
        if(err)
        {
            res.json({
                status:'error',
                message: err
            });
        }
        else
        {
            res.json({
                status:'success',
                data: user
            });
        }
    });
}

exports.getUserByUserName = function(userName, password){
    
        return new Promise((resolve, reject) => { User.findOne({UserName: userName}
             , function(err, user){
            if(err)
            {
                return {
                    status:'error',
                    message: err
                };
            }
            else
            {            
                resolve( {
                    status:'success',
                    data: user
                });
            }
        })
    });
   
}