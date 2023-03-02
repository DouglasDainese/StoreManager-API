const { servicesFindAll, servicesFindById, insertProduct } = require('./productsServices');
const { insertSales } = require('./salesServices');

module.exports = {
  servicesFindAll,
  servicesFindById,
  insertProduct,
  insertSales,
};