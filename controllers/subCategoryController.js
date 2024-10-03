const SubCategory = require('../models/subCategory');
const { Op } = require('sequelize');

exports.createSubCategory = async (req, res) => {
    try {
        const { name, categoryId } = req.body;  
        console.log('req.body', req.body)
        // if (!name || categoryId) {
        //     return res.status(400).json({ error: "Sub category name or categoryId is required" });
        // }
        const duplicationcheck = await SubCategory.findOne({ name });
        console.log('duplicationcheck', duplicationcheck)
        // if(duplicationcheck){//for search entities
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
        const { name } = req.query;
        console.log('name', name)
        const whereClause = {};
        if (name) {
            whereClause.name = {
                [Op.like]: `%${name}%` 
            };
        }
        const subCategory = await SubCategory.findAndCountAll//listing all sub category
            ({
                where: whereClause
            });
            console.log('subCategory.rows', subCategory.rows)

        res.json(subCategory.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};