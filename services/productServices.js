const productModels = require('../models/productModels');

const getAll = async () => {
  const products = await productModels.getAll();

  return products;
};

module.exports = {
  getAll,
};