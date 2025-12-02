const Goal = require('../models/Goal');

// Get user goals
exports.getGoals = async (req, res) => {
  try {
    let goal = await Goal.findOne({ userId: req.user.id });
    
    if (!goal) {
      // Return default goals if none exist
      return res.json({
        targetWeight: 75,
        currentWeight: 78,
        dailyCalories: 2000,
        weeklyWorkouts: 5,
        dailyWater: 3
      });
    }
    
    res.json(goal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update goals
exports.updateGoals = async (req, res) => {
  try {
    const { targetWeight, currentWeight, dailyCalories, weeklyWorkouts, dailyWater } = req.body;

    let goal = await Goal.findOne({ userId: req.user.id });

    if (goal) {
      goal.targetWeight = targetWeight;
      goal.currentWeight = currentWeight;
      goal.dailyCalories = dailyCalories;
      goal.weeklyWorkouts = weeklyWorkouts;
      goal.dailyWater = dailyWater;
      goal.updatedAt = Date.now();
      await goal.save();
    } else {
      goal = new Goal({
        userId: req.user.id,
        targetWeight,
        currentWeight,
        dailyCalories,
        weeklyWorkouts,
        dailyWater
      });
      await goal.save();
    }

    res.json(goal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
