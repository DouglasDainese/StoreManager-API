const express = require('express');
const { salesController } = require('../controllers');
const { validateSalesParams } = require('../middlewares');

const router = express.Router();

router.post('/', validateSalesParams, salesController.insertsSales);

module.exports = router;