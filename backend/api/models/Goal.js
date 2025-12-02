const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  targetWeight: {
    type: Number,
    required: true
  },
  currentWeight: {
    type: Number,
    required: true
  },
  dailyCalories: {
    type: Number,
    required: true
  },
  weeklyWorkouts: {
    type: Number,
    required: true
  },
  dailyWater: {
    type: Number,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Goal', GoalSchema);
