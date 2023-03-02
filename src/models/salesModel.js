const camelize = require('camelize');
const connection = require('./connection');

const registerNewSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE (NOW());',
  );
  return insertId;
};

const insertSalesProducts = async (saleId, { productId, quantity }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?);',
    [saleId, productId, quantity],
  );
  return insertId;
}; 

const getSalesById = async (salesId) => {
   const [result] = await connection.execute(
    'SELECT product_id, quantity FROM StoreManager.sales_products WHERE sale_id = ?;',
    [salesId],
   );
  
  return {
    id: salesId,
    itemsSold: camelize(result),
  };
};

module.exports = {
  registerNewSales,
  insertSalesProducts,
  getSalesById,
};
