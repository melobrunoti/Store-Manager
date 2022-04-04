const express = require('express');

const salesController = require('../controllers/salesController');
const { saleValidate } = require('../middlewares/validations');

const router = express.Router();

router.get('/:id', salesController.getById);
router.put('/:id', saleValidate, salesController.updateSale);
router.get('/', salesController.getAll);
router.post('/', saleValidate, salesController.createSale);

module.exports = router;