const {
  servicesFindAll,
  servicesFindById,
  insertProduct,
  updateProductService,
  deleteProductService,
  searchProduct,
} = require('./productsServices');

const {
  insertSales,
  findSalesService,
  deleteSalesService,
  updateSalesService,
} = require('./salesServices');

module.exports = {
  servicesFindAll,
  servicesFindById,
  insertProduct,
  insertSales,
  findSalesService,
  updateProductService,
  deleteProductService,
  deleteSalesService,
  updateSalesService,
  searchProduct,
};