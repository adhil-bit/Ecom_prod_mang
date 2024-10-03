const express = require('express');
const router = express.Router();
const subCategoryController = require('../controllers/subCategoryController.js');

router.post('/create-sub-category', subCategoryController.createSubCategory);

router.get('/list-sub-category', subCategoryController.getAllSubCategories);

module.exports = router;