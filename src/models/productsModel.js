const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products;',
  );
  return camelize(result); 
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [productId],
  );
  console.log(camelize(result));
  return camelize(result);
};

module.exports = {
  findAll,
  findById,
};