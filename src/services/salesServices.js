const { sales } = require('../models');
const { salesInputs, checkContainProduct } = require('./validations/validationsInputValues');

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
};