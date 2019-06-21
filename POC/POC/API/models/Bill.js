
const mongoose = require('mongoose');
let item = require('./Item')
var billSchema = new mongoose.Schema({
    BillNo : {
        type: Number,
        required: true,
        unique: true        
    },
    
	TotalQuantity : {
        type : Number,
        required: true
    },
    TotalTax : {
        type : Number,
        required: true
    },
    TotalPrice : {
        type : Number,
        required: true
    },
    
    BillDate : {
        type : Date,
        required: true
    },
    Items : 
    [{
        type: mongoose.Schema.Types.Object,
        ref: 'Item',
        required: true
    }]
});

let bill = module.exports = mongoose.model('Bill', billSchema);

