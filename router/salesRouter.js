const express = require('express');

const salesController = require('../controllers/salesController');

const router = express.Router();

router.get('/:id', salesController.getById);
router.put('/:id', salesController.updateSale);
router.get('/', salesController.getAll);
router.post('/', salesController.createSale);

module.exports = router;