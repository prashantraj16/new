const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    UserName : {
        type: String,
        required: true,
        unique: true        
    },
    
	Password : {
        type : String,
        required: true
    }
});

let user = module.exports = mongoose.model('User', userSchema);