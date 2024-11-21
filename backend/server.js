// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes'); // Import profile routes
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use('/api', authRoutes);
app.use('/api', profileRoutes); // Use profile routes

// Serve the uploads folder statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 4001;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
