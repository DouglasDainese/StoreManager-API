const { servicesFindAll, servicesFindById, insertProduct } = require('./productsServices');
const { insertSales, findSalesService } = require('./salesServices');

module.exports = {
  servicesFindAll,
  servicesFindById,
  insertProduct,
  insertSales,
  findSalesService,
};