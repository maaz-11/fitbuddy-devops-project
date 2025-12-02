const Meal = require('../models/Meal');

// Get all meals for user
exports.getMeals = async (req, res) => {
  try {
    const meals = await Meal.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(meals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add new meal
exports.addMeal = async (req, res) => {
  try {
    const { name, calories, protein, carbs, fat } = req.body;

    const meal = new Meal({
      userId: req.user.id,
      name,
      calories,
      protein,
      carbs,
      fat
    });

    await meal.save();
    res.json(meal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete meal
exports.deleteMeal = async (req, res) => {
  try {
    await Meal.findByIdAndDelete(req.params.id);
    res.json({ message: 'Meal deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
