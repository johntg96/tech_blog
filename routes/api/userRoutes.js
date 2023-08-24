
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const authenticateUser = require('../../middleware/authenticateUser');
const User = require("../../models/User");

// Register for the app
router.post('/register', async (req, res) => {
  console.log("here")
  try {
    const { email, password, about } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      about
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = {
        email: email,
        about: about
      };
      res.status(201).json({ message: 'User registered successfully' });
    });
    
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Log in to the app with your personal information
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email
      }
    });

    console.log(user)

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = {
        email: user.email,
        about: user.about
      };
      res.json({ message: 'Login successful' })
    });
    console.log(req.session)
;

  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
});

// Logout user by destroying user session
router.delete('/', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(500).send('error logging out');
      } else {
        res.status(200).json({ message: 'Logout Successful!' });
      }
    });
  } else {
    res.end()
  }
});

router.get('/protected', authenticateUser, (req, res) => {
  res.json({ message: 'You are an authenticated user' });
});

router.get('/profile', authenticateUser, async (req, res) => {
  try {
    console.log(req.session.user);
    res.status(200).json(req.session.user);
  } catch {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete('/logout', (req, res) => {

})

module.exports = router;

