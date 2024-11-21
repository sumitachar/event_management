const express = require('express');
const router = express.Router();
const { User, Contact } = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const upload = require('../middleware/upload'); // Import upload middleware

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).send({ message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send({ message: 'Invalid Token' });
  }
};

// Signup route
router.post('/signup', upload.single('image'), async (req, res) => {
  const { username, password, email } = req.body;
  const imagePath = req.file ? req.file.path : null;

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ username, password: hashedPassword, email, image: imagePath });
    await newUser.save();

    res.status(201).send({ message: 'Successfully submitted' });
  } catch (error) {
    res.status(500).send({ message: 'Failed to submit', error });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'Invalid email' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.send({ message: 'Login successful', token, user: { username: user.username, email: user.email, image: user.image } });
  } catch (error) {
    res.status(500).send({ message: 'Login failed', error });
  }
});

// Fetch current user's data
router.get('/me', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password
    if (!user) {
      return res.status(404).send({ message: 'User not found' });
    }
    res.send(user);
  } catch (error) {
    res.status(500).send({ message: 'Failed to fetch user data', error });
  }
});


// Nodemailer setup
// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true, // Use SSL/TLS
//   auth: {
//     user: 'ghoraisaikat2002@gmail.com',
//     pass: 'saikatghoroi',
//   },
//   debug: true, // Enable debug output
// });
// API endpoint to handle contact form submission


router.post('/contact', async (req, res) => {
  // console.log("########",req.body)
  const { name, email, subject, describe, userEmail } = req.body;
  try {
  // Save to database
  const newContact = new Contact({ name, email, subject, describe, userEmail });
  console.log(newContact,req.body)
  await newContact.save();
  res.status(201).send({ message: 'Successfully submitted' },);
  }catch (error) {
    return res.status(500).json({ error: 'Failed to send email' })
  }

  // // Send email
  // const mailOptions = {
  //   from: {email},
  //   to: 'sumitachar1997@gmail.com',
  //   subject: `New Contact Form Submission from ${name}`,
  //   text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${describe}`,
  // };

  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error('Error sending email:', error); // Log the error for debugging
  //     return res.status(500).json({ error: 'Failed to send email' });
  //   }
  //   console.log('Email sent:', info.response); // Log the email response for debugging
  //   res.status(200).json({ message: 'Contact form submitted successfully' });
  // });


});



module.exports = router;
