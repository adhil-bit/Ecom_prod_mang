const Product = require('../models/product');
const { Op } = require('sequelize');


exports.createProduct = async (req, res) => {
    console.log('req', req.body)
    try {
        const { name, subCategoryId,productId, varientDetails, imageUrl, deiscription} = req.body; 
        // console.log('name, subCategoryId, varientDetails, imageUrl, deiscription', name, subCategoryId, varientDetails, imageUrl, deiscription)

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
        let page = req.query.page ? parseInt(req.query.page) : 1;//pagination parameters
        let limit = req.query.limit ? parseInt(req.query.limit) : 10;

        const offset = (page - 1) * limit;

        let filter = req.query || {};//for search entities

        let whereClause = {};
        // console.log('filter.subCategoryId', filter.subCategoryId)

        if (filter.subCategoryId) {//fro catgaory wise search 
            whereClause.subCategoryId = filter.subCategoryId;
        }
        // console.log('filter.name', filter.name)

        if (filter.name) {// name wise search
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

exports.updateProduct = async (req, res) => {//edit product 
    try {
        const { productId } = req.params; 
        const { name, subCategoryId, varientDetails, imageUrl, description } = req.body; 

        const product = await Product.findOne({ where: { id:productId } });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const updatedProduct = await product.update({
            name: name || product.name,
            subCategoryId: subCategoryId || product.subCategoryId,
            varientDetails: varientDetails || product.varientDetails,
            imageUrl: imageUrl || product.imageUrl,
            description: description || product.description  
        });

        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
