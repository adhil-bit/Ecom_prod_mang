const SubCategory = require('../models/subCategory');

exports.createSubCategory = async (req, res) => {
    try {
        const { name, categoryId } = req.body;  // Destructure 'name' from the body
        console.log('req.body', req.body)
        // if (!name || categoryId) {
        //     return res.status(400).json({ error: "Sub category name or categoryId is required" });
        // }
        const duplicationcheck = await SubCategory.findOne({ name });
        console.log('duplicationcheck', duplicationcheck)
        // if(duplicationcheck){
        //     return res.status(400).json({ error: "Sub category name already exist" });
        // }
        const newSubCategory = await SubCategory.create({ name, categoryId });
        res.status(201).json(newSubCategory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllSubCategories = async (req, res) => {
    try {
        const subCategory = await SubCategory.findAll();
        res.json(subCategory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};