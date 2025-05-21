const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const jwtAuth = require('../middleware/jwtAuth');

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/login' }),
  (req, res) => {
    const user = req.user;
    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    // Return token in response or redirect
    res.json({ token, user });
  }
);

router.get('/protected', jwtAuth, (req, res) => {
  res.json({ message: 'Access granted to protected route!', user: req.user });
});

module.exports = router;
