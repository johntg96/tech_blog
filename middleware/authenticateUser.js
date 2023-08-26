const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Import the User model
const router = express.Router();

router.use((req, res, next) => {

  if ( !req.session.loggedIn ) {
    return res.redirect('/login');
  }

  return next()
  //res.status(500).json({ message: 'An internal server error occurred.' });
});


module.exports = router;