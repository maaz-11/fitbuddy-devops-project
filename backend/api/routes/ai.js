const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const aiController = require('../controllers/aiController');

// @route   GET /api/ai/meal-suggestion
router.get('/meal-suggestion', auth, aiController.getMealSuggestion);

// @route   GET /api/ai/workout-suggestion
router.get('/workout-suggestion', auth, aiController.getWorkoutSuggestion);

// @route   GET /api/ai/goal-suggestion
router.get('/goal-suggestion', auth, aiController.getGoalSuggestion);

module.exports = router;
