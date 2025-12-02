const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const workoutsController = require('../controllers/workoutsController');

// @route   GET /api/workouts
router.get('/', auth, workoutsController.getWorkouts);

// @route   POST /api/workouts
router.post('/', auth, workoutsController.addWorkout);

// @route   DELETE /api/workouts/:id
router.delete('/:id', auth, workoutsController.deleteWorkout);

module.exports = router;
