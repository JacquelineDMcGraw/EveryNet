// userRoutes.js
const express = require('express');
const router = express.Router();

// Import userController
const userController = require('../controllers/userController');

// Get all users
router.get('/', userController.getAllUsers);

module.exports = router;
