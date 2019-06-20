const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/RetailStore', {useNewUrlParser: true}, (err) => {
    if (!err) {
        console.log("Database connected.")
    }
    else {
        console.log("Error in DB connection : " + err);
    };
});

require('./product.model');
require('./user.model')