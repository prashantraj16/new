const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    ProductId : {
        type: Number,
        required: true        
    },
    
	ProductName : {
        type : String,
        required: true
    },
    
	ProductPrice :{
        type: Number,
        required: true
    },
    ManufacturerName : {
        type: String,
        maxlength: 20
    },
    ManufacturingDate :
    { 
        type: Date,
        default: Date.now,
        
    }
});

let product = module.exports = mongoose.model('Product', productSchema);

module.exports.get = function (callback, limit){
    product.find(callback).limit(limit);
}

module.exports.save = function (callback){
    //debugger;
    product.save(callback);
}
