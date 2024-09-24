const Category = require('../models/category');

exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;  // Destructure 'name' from the body
        if (!name) {
            return res.status(400).json({ error: "Category name is required" });
        }
        const newCategory = await Category.create({ name });
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
