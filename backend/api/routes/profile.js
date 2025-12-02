const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const profileController = require('../controllers/profileController');

// @route   GET /api/profile
router.get('/', auth, profileController.getProfile);

// @route   PUT /api/profile
router.put('/', auth, profileController.updateProfile);

module.exports = router;
