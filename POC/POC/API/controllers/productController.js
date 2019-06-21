const express = require('express');
const mongoose = require('mongoose');
var Product = mongoose.model('Product');

exports.index = function(req, res){

    Product.get(function(err, products){
        if(!err)
        {
            res.json({
                status:"success",
                data: products
            });
        }
        else
        {
            res.json({
                status:"error",
                data: err
            });
            
        }
    });
}

exports.create = function(req, res){
    debugger;
    let product = new Product();
    product.ProductId = req.body.ProductId;
	product.ProductName = req.body.ProductName;
	product.ProductPrice = req.body.ProductPrice;
    product.ManufacturingDate = req.body.ManufacturingDate;
    
    Product.save(function(err, data){
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
                data: data
            });
        }
    });
}

exports.getByProductId = function(req, res){
        debugger;
    Product.findOne({ProductId: req.params.ProductId} , function(err, data){
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
                data: data
            });
        }
    });
}

exports.deleteByProductId = function(req, res){    
    Product.findOneAndDelete({ProductId: req.params.ProductId} , function(err, data){    
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
                data: data
            });
        }
    });
}

exports.update = function(req, res){       

    Product.findOneAndUpdate({ProductId: req.body.ProductId}, {ProductPrice: req.body.ProductPrice}, {new : true}, function(err, data){
        
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
                status:'Updated',
                data: data
            });
        }
    });
}




