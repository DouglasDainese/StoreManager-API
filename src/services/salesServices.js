const { sales } = require('../models');
const { salesInputs, checkContainProduct } = require('./validations/validationsInputValues');

const findSalesService = async ({ id }) => {
  if (!id) {
    const salesAll = await sales.getAllSales();
    return { type: null, message: salesAll };
  }
  const sale = await sales.getAllSalesById(id);
  if (!sale.length > 0) return { type: 404, message: 'Sale not found' };

  return { type: null, message: sale };
};

const insertSales = async (itensSold) => {
  const inputsSales = salesInputs(itensSold);
  if (inputsSales.type) return inputsSales; 
  const checkProductInDb = await checkContainProduct(itensSold);
  if (checkProductInDb.type) return checkProductInDb;

  const id = await sales.registerNewSales();
  await Promise.all(itensSold.map((sale) => sales.insertSalesProducts(id, sale)));

  const result = await sales.getSalesById(id);

  return { type: null, message: result }; 
};

module.exports = {
  insertSales,
  findSalesService,
};