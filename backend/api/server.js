const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Error:', err));

// Basic Route
app.get('/', (req, res) => {
  res.json({ message: 'FitBuddy API Running!' });
});

// Routes (we'll add these)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/meals', require('./routes/meals'));
app.use('/api/workouts', require('./routes/workouts'));
app.use('/api/goals', require('./routes/goals'));
app.use('/api/ai', require('./routes/ai'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
