const express = require('express');

const productController = require('../controllers/productControllers');

const router = express.Router();

router.get('/', productController.getAll);

module.exports = router;