const User = require('../models/User');

// Get User Profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update User Profile
exports.updateProfile = async (req, res) => {
  try {
    const { name, age, sex, height, weight } = req.body;
    
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { name, age, sex, height, weight },
      { new: true }
    ).select('-password');

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
