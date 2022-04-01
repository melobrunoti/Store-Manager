const express = require('express');

const productController = require('../controllers/productController');
const { validateProduct } = require('../middlewares/validations');

const router = express.Router();

router.get('/:id', productController.getById);
router.get('/', productController.getAll);
router.post('/', validateProduct, productController.createProduct);

module.exports = router;