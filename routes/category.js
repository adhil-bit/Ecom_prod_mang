const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController.js');

router.post('/create-category', categoryController.createCategory);

router.get('/list-category', categoryController.getAllCategories);

module.exports = router;