const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/sign-in', userController.signup);

router.get('/login', userController.login);

router.get('/wish-list', userController.getWishList);

router.post('/add-wish-list', userController.addToWishlist);



module.exports = router;