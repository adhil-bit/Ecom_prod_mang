const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');

router.post('/sign-in', userController.signup);

router.get('/login', userController.login);

module.exports = router;