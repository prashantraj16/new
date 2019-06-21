const express = require('express');
const mongoose = require('mongoose');
var Bill = mongoose.model('Bill');

exports.index = function(req, res){

    Bill.find(function(err, bills){
        if(!err)
        {
            res.json({
                status:"success",
                data: bills
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
    let bill = new Bill();
    bill.BillNo = req.body.BillNo;
	bill.TotalQuantity = req.body.TotalQuantity;
	bill.TotalTax = req.body.TotalTax;
    bill.TotalPrice = req.body.TotalPrice;
    bill.BillDate = req.body.BillDate;
    bill.Items = req.body.Items;
    
    bill.save(function(err, data){
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
    Bill.findOne({BillNo: req.params.BillNo} , function(err, data){
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
    Bill.findOneAndDelete({BillNo: req.params.BillNo} , function(err, data){    
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

    Bill.findOneAndUpdate({BillNo: req.body.BillNo}, {TotalPrice: req.body.TotalPrice}, {new : true}, function(err, data){
        
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




