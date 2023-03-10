const express = require('express');
const { productsController } = require('../controllers');

const router = express.Router();

router.get('/', productsController.getAllProduct);

router.get('/search', productsController.searchProductController);

router.get('/:id', productsController.getByIdProduct);

router.post('/', productsController.insertNewProduct);

router.put('/:id', productsController.updateProductController);

router.delete('/:id', productsController.deleteProductController);

module.exports = router;