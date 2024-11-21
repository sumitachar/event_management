// controllers/profileController.js
const { User } = require('../models/User');

// Get user profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        // console.log("req",req.user,user)
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.send(user);
    } catch (error) {
        res.status(500).send({ message: 'Server error', error });
    }
};

// Update user profile
exports.updateProfile = async (req, res) => {
    const { username, email, mobile, address, pin, states } = req.body;
    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        // console.log("req",req.body,username, email, mobile, address, pin, states,user )

        user.username = username || user.username;
        user.email = email || user.email;
        user.mobile = mobile || user.mobile;
        user.address = address || user.address;
        user.pin = pin || user.pin;
        user.states = states || user.states;

        await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send({ message: 'Server error', error });
    }
};