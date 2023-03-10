const {
  servicesFindAll,
  servicesFindById,
  insertProduct,
  updateProductService,
} = require('./productsServices');
const { insertSales, findSalesService } = require('./salesServices');

module.exports = {
  servicesFindAll,
  servicesFindById,
  insertProduct,
  insertSales,
  findSalesService,
  updateProductService,
};