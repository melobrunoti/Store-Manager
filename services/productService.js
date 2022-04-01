const productModel = require('../models/productModel');

const getAll = async () => {
  const products = await productModel.getAll();

  return products;
};

const getById = async (id) => {
  const product = await productModel.getById(id);

  return product;
};

const createProduct = async ({ name, quantity }) => {
  const newProduct = await productModel.createProduct({ name, quantity });
  if (!newProduct) {
    return false;
  }
  return newProduct;
};

const nameValidator = async (name) => {
  const products = await productModel.getAll();
  const result = products.some((p) => p.name === name);

  return result;
};

module.exports = {
  getAll,
  getById,
  createProduct,
  nameValidator,
  
};