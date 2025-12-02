const mongoose = require('mongoose');

const MealSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  protein: {
    type: Number,
    required: true
  },
  carbs: {
    type: Number,
    required: true
  },
  fat: {
    type: Number,
    required: true
  },
  time: {
    type: String,
    default: () => new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Meal', MealSchema);
