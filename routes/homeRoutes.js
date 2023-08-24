const path = require('path');
const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authenticateUser');

router.get('/login', (req, res) => {
  res.render('login')
});

router.get('/register', (req, res) => {
  res.render('register')
});

router.get('/profile', authenticateUser, (req, res) => {
  res.render('profile');
});

router.get('/', (req, res) => {
  res.render('homepage')
});

module.exports = router;