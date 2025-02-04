const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController.js');

router.post('/create-product', productController.createProduct);

router.get('/list-product', productController.getAllProducts);

router.get('/catogory-list', productController.getListSubcategory);

module.exports = router;