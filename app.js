const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const category = require('./routes/category');
const subCategory = require('./routes/subCategory');
const product = require('./routes/product');


const { sequelize } = require('./models');

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/categories', category);
app.use('/api/Sub-categories', subCategory);
app.use('/api/product', product);


// // Sync Sequelize models and start server
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});