const {
  servicesFindAll,
  servicesFindById,
  insertProduct,
  updateProductService,
  deleteProductService,
} = require('./productsServices');
const { insertSales, findSalesService, deleteSalesService } = require('./salesServices');

module.exports = {
  servicesFindAll,
  servicesFindById,
  insertProduct,
  insertSales,
  findSalesService,
  updateProductService,
  deleteProductService,
  deleteSalesService,
};