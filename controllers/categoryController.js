const Category = require('../models/category');

exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body; 
        if (!name) {
            return res.status(400).json({ error: "Category name is required" });
        }
        const duplicationcheck = await Category.findOne({ name });
        if(duplicationcheck){//for validation - duplication
            return res.status(400).json({ error: "Category name already exist" });
        }
        const newCategory = await Category.create({ name });
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};