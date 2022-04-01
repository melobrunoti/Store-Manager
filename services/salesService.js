const salesModel = require('../models/salesModel');
/* const { validate } = require('../middlewares/validations'); */

const getAll = async () => {
  const products = await salesModel.getAll();

  return products;
};

const getById = async (id) => {
  const product = await salesModel.getById(id);

  return product;
};
module.exports = {
  getAll,
  getById,
};