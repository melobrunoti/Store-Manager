const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(
    `SELECT
    s.id as saleId,
    s.date,
    sp.product_id as productId,
    sp.quantity
    FROM sales s
    JOIN sales_products sp
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
    FROM sales s
    JOIN sales_products sp
    ON sp.sale_id = s.id
    WHERE s.id = ?`, [id],
  );
  
  return sale;
};

module.exports = {
  getAll,
  getById,
};