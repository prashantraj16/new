let express = require('express');
let apiRoutes = require('./routes/routes');
let path = require("path");

//const productController = require('./controllers/productController')
const app = express();

// app.use(function (err, req, res, next) {
//   debugger;
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })

//app.use('/api', apiRoutes);
app.use(express.static(__dirname));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3001, () =>
{
    console.log('Express server started at port : 3001');
});
