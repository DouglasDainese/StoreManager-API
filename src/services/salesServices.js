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

const deleteSalesService = async (id) => {
  const checkSale = await sales.findSaleById(id);

  if (checkSale === undefined) return { type: 404, message: 'Sale not found' };

  await sales.deleteSales(id);
  return { type: null, message: null };
};

const updateSalesService = async (id, itemsUpdated) => {
  const inputsSales = salesInputs(itemsUpdated);
  if (inputsSales.type) return inputsSales; 
  
  const checkSalebById = await sales.findSaleById(id);
  if (checkSalebById === undefined) return { type: 404, message: 'Sale not found' };

  const checkProductInDb = await checkContainProduct(itemsUpdated);
  if (checkProductInDb.type) return checkProductInDb;
  
  await Promise.all(itemsUpdated.map((sale) =>
    sales.updateSales({ saleId: id, productId: sale.productId, quantity: sale.quantity })));

  const result = await sales.getSalesById(id);

  return { type: null, message: { saleId: Number(result.id), itemsUpdated: result.itemsSold } }; 
};

module.exports = {
  insertSales,
  findSalesService,
  deleteSalesService,
  updateSalesService,
};