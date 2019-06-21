const mongoose = require('mongoose');
let product = require('./product.model')
var ItemSchema = new mongoose.Schema({
    Product : {
        type: mongoose.Schema.Types.Object,
        ref: 'Product',
        required: true,
        unique: true        
    },
    
	Quantity : {
        type : Number,
        required: true
    },
    Tax : {
        type : Number,
        required: true
    },
    TotalPrice : {
        type : Number,
        required: true
    }
});

let item = module.exports = mongoose.model('Item', ItemSchema);

