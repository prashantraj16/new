const express = require('express');
const jwtAuth = require('../middleware/jwtAuthentication')

const billController = require('../controllers/billcontroller')
var router = express.Router();

router.get('/', (req, res) =>
{
    res.json({status : 'Success', message: 'Got it!'});
});


//router.use(jwtAuth.checkToken);

router.route('/bill')
.get(billController.index)
.post(billController.create)
.put(billController.update);

router.route('/bill/:BillNo')
.get(billController.getByProductId)
.delete(billController.deleteByProductId);

module.exports = router;