const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id;',
  );
  return result; 
};

const findById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?;',
    [productId],
  );
  return result;
};

const searchByName = async (search) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE name LIKE ?',
    [`%${search}%`],
  );
  return result;
};

const insert = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [name],
  );
  return insertId;
};

const update = async ({ id, name }) => {
  const [{ affectedRows }] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );

  return affectedRows;
};

const deleteProduct = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?', [id],
  );

  return affectedRows;
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
  deleteProduct,
  searchByName,
};