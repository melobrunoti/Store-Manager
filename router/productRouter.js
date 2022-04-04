const express = require('express');

const productController = require('../controllers/productController');
const { validateProduct, nameVerifier } = require('../middlewares/validations');

const router = express.Router();

router.get('/:id', productController.getById);
router.put('/:id', validateProduct, productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.get('/', productController.getAll);
router.post('/', validateProduct, nameVerifier, productController.createProduct);

module.exports = router;