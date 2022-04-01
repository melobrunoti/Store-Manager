const express = require('express');

const productController = require('../controllers/productController');
const { validateProduct, nameVerifier } = require('../middlewares/validations');

const router = express.Router();

router.get('/:id', productController.getById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.get('/', productController.getAll);
router.post('/', nameVerifier, validateProduct, productController.createProduct);

module.exports = router;