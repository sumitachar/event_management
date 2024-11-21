// models/User.js
const mongoose = require('mongoose');

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String }, // Path to the uploaded image
  mobile: { type: Number }, // Add bio field
  address: { type: String }, // Add avatar field (could be the same as image)
  pin: { type: Number }, // Add location field
  states:{type: String}
});

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  describe: String,
  userEmail: String,
});

const User = mongoose.model('User', userSchema);
const Contact = mongoose.model('Contact', contactSchema);

module.exports = { User, Contact };
