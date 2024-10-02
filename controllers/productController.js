const Product = require('../models/product');

exports.createProduct = async (req, res) => {
    console.log('req', req.body)
    try {
        const { name, subCategoryId,productId, varientDetails, imageUrl, deiscription} = req.body;  // Destructure 'name' from the body
        console.log('name, subCategoryId, varientDetails, imageUrl, deiscription', name, subCategoryId, varientDetails, imageUrl, deiscription)
        // if (!name) {
        //     return res.status(400).json({ error: "Product name is required" });
        // }
        // const duplicationcheck = await Product.findOne({ name });
        // if(duplicationcheck){
        //     return res.status(400).json({ error: "Product name already exist" });
        // }
        const newProduct = await Product.create({ name, productId, subCategoryId, varientDetails, imageUrl, deiscription });
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const productList = await Product.findAll();
        res.json(productList);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};