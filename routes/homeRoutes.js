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

router.get('/dashboard', authenticateUser, (req, res) => {
  res.render('dashboard');
});

router.get('/homepage', authenticateUser, (req, res) => {
  res.render('homepage');
});

router.get('/', (req, res) => {
  res.render('landing-page');
});

module.exports = router;