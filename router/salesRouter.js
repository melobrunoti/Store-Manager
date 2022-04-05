const express = require('express');

const salesController = require('../controllers/salesController');
const { saleValidate, quantityVerifier } = require('../middlewares/validations');

const router = express.Router();

router.get('/:id', salesController.getById);
router.put('/:id', saleValidate, salesController.updateSale);
router.delete('/:id', salesController.deleteSale);
router.get('/', salesController.getAll);
router.post('/', saleValidate, quantityVerifier, salesController.createSale);

module.exports = router;