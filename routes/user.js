// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/user');

const router = express.Router();

router.post('/signup', userController.signupController);
router.post('/login', userController.loginController);

module.exports = router;
