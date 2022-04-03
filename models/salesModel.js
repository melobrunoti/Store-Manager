const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
    `SELECT
    s.id as saleId,
    s.date,
    sp.product_id as productId,
    sp.quantity
    FROM StoreManager.sales s
    JOIN StoreManager.sales_products sp
    ON sp.sale_id = s.id
    ORDER BY saleId, ProductId;`,
  );
  return sales;
};

const getById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT
    sp.product_id as productId,
    sp.quantity,
    s.date
    FROM StoreManager.sales s
    JOIN StoreManager.sales_products sp
    ON sp.sale_id = s.id
    WHERE s.id = ?`, [id],
  );
  
  return sale;
};

const createSale = async (items) => {
  const [sale] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );

  await Promise.all(items.map(async ({ productId, quantity }) => {
    await connection.execute(`
    INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?);`,
    [sale.insertId, productId, quantity]);
  }));

  return {
    id: sale.insertId,
    itemsSold: items,
  };
};

const updateSale = async (items, id) => {
  await Promise.all(items.map(async ({ productId, quantity }) => {
    await connection.execute(`
    UPDATE StoreManager.sales_products SET product_id = ?, quantity = ? WHERE sale_id = ?`,
    [productId, quantity, id]);
  }));

  return {
    saleId: id,
    itemUpdated: items,
  };
};

module.exports = {
  getAll,
  getById,
  createSale,
  updateSale,
};