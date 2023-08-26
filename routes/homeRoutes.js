const path = require('path');
const express = require('express');
const router = express.Router();
const authenticateUser = require('../middleware/authenticateUser');

router.get('/login', (req, res) => {
  return res.render('login')
});

router.get('/register', (req, res) => {
  return res.render('register')
});

router.get('/profile', authenticateUser, (req, res) => {
  return res.render('profile');
});

router.get('/dashboard', authenticateUser, (req, res) => {
  return res.render('dashboard');
});

router.get('/homepage', authenticateUser, (req, res) => {
  return res.render('homepage');
});

router.get('/', (req, res) => {
  return res.render('landing-page');
});

module.exports = router;