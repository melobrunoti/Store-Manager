const connection = require('./connection');

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products ORDER BY id;',
  );
  return products;
};

const getById = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [id],
  );
  return product;
};

const createProduct = async ({ name, quantity }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name, quantity) VALUES (?, ?);',
    [name, quantity],
    );

  return { id: insertId, name, quantity };
};

const updateProduct = async ({ name, quantity, id }) => {
  await connection.execute(
    'UPDATE products SET name = ?, quantity = ? WHERE id = ?',
    [name, quantity, id],
    );

  return {
    id,
    name,
    quantity,
  };
};

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
};