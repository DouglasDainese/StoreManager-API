const camelize = require('camelize');
const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT SP.sale_id, S.date, SP.product_id, SP.quantity 
   FROM StoreManager.sales AS S
   INNER JOIN StoreManager.sales_products AS SP
   ON S.id = SP.sale_id
   ORDER BY SP.sale_id, SP.product_id;`,
  );
  return camelize(result);
};

const getAllSalesById = async (id) => {
  const [result] = await connection.execute(
    `SELECT S.date, SP.product_id, SP.quantity 
   FROM StoreManager.sales AS S
   INNER JOIN StoreManager.sales_products AS SP
   ON S.id = SP.sale_id
   WHERE SP.sale_id = ?
   ORDER BY SP.sale_id, SP.product_id;`,
    [id],
  );
  return camelize(result);
};

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
     `SELECT product_id, quantity 
      FROM StoreManager.sales_products WHERE sale_id = ?
      ORDER BY product_id;`,
    [salesId],
   );
  
  return {
    id: salesId,
    itemsSold: camelize(result),
  };
};

const findSaleById = async (id) => {
    const [[result]] = await connection.execute(
     'SELECT * FROM StoreManager.sales WHERE id = ?',
    [id],
    );
  return result;
};

const deleteSales = async (saleId) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [saleId],
  );
  return affectedRows;
};

const updateSales = async ({ saleId, productId, quantity }) => {
  const [{ affectedRows }] = await connection.execute(
  `UPDATE StoreManager.sales_products
   SET product_id = ?, quantity = ?
   WHERE sale_id = ? AND product_id = ?`,
    [productId, quantity, saleId, productId],
  );
  return affectedRows;
};

module.exports = {
  registerNewSales,
  insertSalesProducts,
  getAllSales,
  getAllSalesById,
  getSalesById,
  deleteSales,
  findSaleById,
  updateSales,
};
