const User = require('../models/User');
const Goal = require('../models/Goal');
const Meal = require('../models/Meal');
const Workout = require('../models/Workout');

// AI Meal Suggestion
exports.getMealSuggestion = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const goal = await Goal.findOne({ userId: req.user.id });
    const todayMeals = await Meal.find({
      userId: req.user.id,
      date: { $gte: new Date().setHours(0, 0, 0, 0) }
    });

    const consumedCalories = todayMeals.reduce((sum, meal) => sum + meal.calories, 0);
    const remainingCalories = (goal?.dailyCalories || 2000) - consumedCalories;

    // Array of 3 different meal suggestions
    const mealOptions = [
      {
        meal: 'Grilled Salmon with Quinoa and Vegetables',
        calories: 580,
        protein: 45,
        carbs: 52,
        fat: 18
      },
      {
        meal: 'Chicken Stir-fry with Brown Rice',
        calories: 520,
        protein: 40,
        carbs: 55,
        fat: 15
      },
      {
        meal: 'Turkey Wrap with Sweet Potato Fries',
        calories: 490,
        protein: 38,
        carbs: 48,
        fat: 16
      }
    ];

    // Pick random suggestion
    const randomIndex = Math.floor(Math.random() * mealOptions.length);
    const suggestion = mealOptions[randomIndex];

    res.json(suggestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// AI Workout Suggestion
exports.getWorkoutSuggestion = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const goal = await Goal.findOne({ userId: req.user.id });
    const weekWorkouts = await Workout.find({
      userId: req.user.id,
      date: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
    });

    const workoutsThisWeek = weekWorkouts.length;
    const targetWorkouts = goal?.weeklyWorkouts || 5;

    // Array of 3 different workout suggestions
    const workoutOptions = [
      {
        workout: 'Full Body HIIT Training',
        duration: 45,
        exercises: ['Burpees - 3 sets', 'Jump Squats - 3 sets', 'Mountain Climbers - 3 sets', 'Push-ups - 3 sets']
      },
      {
        workout: 'Upper Body Strength',
        duration: 50,
        exercises: ['Bench Press - 4 sets', 'Pull-ups - 3 sets', 'Shoulder Press - 3 sets', 'Bicep Curls - 3 sets']
      },
      {
        workout: 'Cardio & Core',
        duration: 40,
        exercises: ['Running - 20 min', 'Plank - 3 sets', 'Russian Twists - 3 sets', 'Bicycle Crunches - 3 sets']
      }
    ];

    // Pick random suggestion
    const randomIndex = Math.floor(Math.random() * workoutOptions.length);
    const suggestion = workoutOptions[randomIndex];

    res.json(suggestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// AI Goal Suggestion
exports.getGoalSuggestion = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    
    const bmi = user.weight / ((user.height / 100) ** 2);
    
    // Array of 3 different goal suggestions
    const goalOptions = [
      {
        targetWeight: user.weight - 5,
        dailyCalories: 1800,
        weeklyWorkouts: 5,
        dailyWater: 3,
        protein: Math.round(user.weight * 1.6),
        reason: `Weight loss focused plan with balanced nutrition`
      },
      {
        targetWeight: user.weight - 3,
        dailyCalories: 2000,
        weeklyWorkouts: 4,
        dailyWater: 3.5,
        protein: Math.round(user.weight * 1.8),
        reason: `Moderate approach for sustainable weight management`
      },
      {
        targetWeight: user.weight + 3,
        dailyCalories: 2400,
        weeklyWorkouts: 5,
        dailyWater: 4,
        protein: Math.round(user.weight * 2.0),
        reason: `Muscle building plan with higher protein intake`
      }
    ];

    // Pick random suggestion
    const randomIndex = Math.floor(Math.random() * goalOptions.length);
    const suggestion = goalOptions[randomIndex];

    res.json(suggestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
