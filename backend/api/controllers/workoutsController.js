const Workout = require('../models/Workout');

// Get all workouts for user
exports.getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(workouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add new workout
exports.addWorkout = async (req, res) => {
  try {
    const { exercise, duration, calories } = req.body;

    const workout = new Workout({
      userId: req.user.id,
      exercise,
      duration,
      calories
    });

    await workout.save();
    res.json(workout);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete workout
exports.deleteWorkout = async (req, res) => {
  try {
    await Workout.findByIdAndDelete(req.params.id);
    res.json({ message: 'Workout deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
