const express = require('express');
const jwtAuth = require('../middleware/jwtAuthentication')
const jwtTokenCreator = require('../middleware/generateToken')

const productController = require('../controllers/productController')
var router = express.Router();

router.get('/', (req, res) =>
{
    res.json({status : 'Success', message: 'Got it!'});
});


router.use(jwtAuth.checkToken);

router.route('/product')
.get(productController.index)
.post(productController.create)
.put(productController.update);

router.route('/product/:ProductId')
.get(productController.getByProductId)
.delete(productController.deleteByProductId);

module.exports = router;