const productModels = require('../models/productModel');

const getAll = async () => {
  const products = await productModels.getAll();

  return products;
};

const getById = async (id) => {
  const product = await productModels.getById(id);

  return product;
};
module.exports = {
  getAll,
  getById,
};