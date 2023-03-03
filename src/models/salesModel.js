const camelize = require('camelize');
const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT SP.sale_id, S.date, SP.product_id, SP.quantity 
   FROM sales AS S
   INNER JOIN sales_products AS SP
   ON S.id = SP.sale_id
   ORDER BY SP.sale_id, SP.product_id;`,
  );
  return camelize(result);
};

const getAllSalesById = async (id) => {
  const [result] = await connection.execute(
    `SELECT S.date, SP.product_id, SP.quantity 
   FROM sales AS S
   INNER JOIN sales_products AS SP
   ON S.id = SP.sale_id
   WHERE SP.sale_id = ?
   ORDER BY SP.sale_id, SP.product_id;`,
    [id],
  );
  return camelize(result);
};

const registerNewSales = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) VALUE (NOW());',
  );

  return insertId;
};

const insertSalesProducts = async (saleId, { productId, quantity }) => {
  const [{ affectedRows }] = await connection.execute(
    'INSERT INTO sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?);',
    [saleId, productId, quantity],
  );
  return affectedRows;
}; 

insertSalesProducts(1, { productId: 1, quantity: 1 });

const getSalesById = async (salesId) => {
   const [result] = await connection.execute(
     `SELECT product_id, quantity 
      FROM sales_products WHERE sale_id = ?
      ORDER BY product_id;`,
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
  getAllSales,
  getAllSalesById,
  getSalesById,
};
