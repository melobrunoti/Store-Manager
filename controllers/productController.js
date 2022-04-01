const productServices = require('../services/productService');

const getAll = async (req, res) => {
  const products = await productServices.getAll();

  res.status(200).json(products);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const product = await productServices.getById(id);

  if (!product) return res.status(404).json({ message: 'Product not found' });

  res.status(200).json(product);
};

const createProduct = async (req, res) => {
  const { name, quantity } = req.body;
  const newProduct = await productServices.createProduct({ name, quantity });
  
  if (!newProduct) {
    return res.status(409).json({ message: 'Something got wrong' });
  }
  res.status(201).json(newProduct);
};

const updateProduct = async (req, res) => {
  const { name, quantity } = req.body;
  const { id } = req.params;
  const updatedProduct = await productServices.updateProduct({ name, quantity, id });
  
  if (!updatedProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(updatedProduct);
};

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
};