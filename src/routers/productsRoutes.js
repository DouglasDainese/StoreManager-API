const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.getAllProduct);

router.get('/:id', productsController.getByIdProduct);

router.post('/', productsController.insertNewProduct);

module.exports = router;