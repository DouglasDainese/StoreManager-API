const express = require('express');
const { salesController } = require('../controllers');
const { validateSalesParams } = require('../middlewares');

const router = express.Router();

router.get('/', salesController.findSalesController);

router.get('/:id', salesController.findSalesController);

router.post('/', validateSalesParams, salesController.insertsSales);

router.put('/:id', validateSalesParams, salesController.updateSalesController);

router.delete('/:id', salesController.deleteSales);

module.exports = router;