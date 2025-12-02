const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const mealsController = require('../controllers/mealsController');

// @route   GET /api/meals
router.get('/', auth, mealsController.getMeals);

// @route   POST /api/meals
router.post('/', auth, mealsController.addMeal);

// @route   DELETE /api/meals/:id
router.delete('/:id', auth, mealsController.deleteMeal);

module.exports = router;
