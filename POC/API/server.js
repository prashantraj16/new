const express = require('express');
const bodyParser = require('body-parser');
const winston = require('./config/winston')
const morgan = require('morgan')
require('./models/db');

let apiRoutes = require('./api-routes/api-routes');
let userRoutes = require('./api-routes/userRouter');
let createUser = require('./api-routes/createUser')

const productController = require('./controllers/productController')
const app = express();

app.use(morgan('combined', {stream: winston.stream}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
  next();
});

app.use(function (err, req, res, next) {
  debugger;
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyParser.json())

app.use('/api', apiRoutes);
app.use('/user',userRoutes);
app.use('/createUser', createUser);

app.listen(3000, () =>
{
    console.log('Express server started at port : 3000');
});
