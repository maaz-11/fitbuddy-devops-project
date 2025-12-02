const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const goalsController = require('../controllers/goalsController');

// @route   GET /api/goals
router.get('/', auth, goalsController.getGoals);

// @route   PUT /api/goals
router.put('/', auth, goalsController.updateGoals);

module.exports = router;
