const Product = require('../models/product');
const { Op } = require('sequelize');


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
// exports.getListSubcatagory = async (req, res) => {
//     try {
//         let filter = req.body.filter
//         const productCatagoryList = await Product.findAndCountAll(
//             where:
//         );
//         res.json(productCatagoryList);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

exports.getListSubcategory = async (req, res) => {
    try {
        let page = req.query.page ? parseInt(req.query.page) : 1;
        let limit = req.query.limit ? parseInt(req.query.limit) : 10;

        const offset = (page - 1) * limit;

        let filter = req.query || {};

        let whereClause = {};
        // console.log('filter.subCategoryId', filter.subCategoryId)

        if (filter.subCategoryId) {
            whereClause.subCategoryId = filter.subCategoryId;
        }
        // console.log('filter.name', filter.name)

        if (filter.name) {
            console.log('filter.name', filter.name)
            whereClause.name = {
                [Op.like]: `%${filter.name}%`  // Assuming a fuzzy search on name
            };
        }

        const productCategoryList = await Product.findAndCountAll({
            where: whereClause,
            limit: limit,
            offset: offset
        });
        // console.log('productCategoryList', productCategoryList.rows)

        // Returning response with pagination
        res.json({
            totalItems: productCategoryList.count,
            totalPages: Math.ceil(productCategoryList.count / limit),
            currentPage: page,
            pageSize: limit,
            products: productCategoryList.rows
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};