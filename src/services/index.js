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
  findSaleByIdService,
  findAllSalesService,
  deleteSalesService,
  updateSalesService,
} = require('./salesServices');

module.exports = {
  servicesFindAll,
  servicesFindById,
  insertProduct,
  insertSales,
  findSaleByIdService,
  findAllSalesService,
  updateProductService,
  deleteProductService,
  deleteSalesService,
  updateSalesService,
  searchProduct,
};