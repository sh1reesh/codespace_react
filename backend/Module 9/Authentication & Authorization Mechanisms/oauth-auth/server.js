const express = require('express');
const passport = require('passport');
const session = require('express-session');
require('./config/passport-setup');

const app = express();

// Session setup
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: false
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Home route
app.get('/', (req, res) => {
    res.send('<a href="/auth/google">Login with Google</a>');
});

// Protected route
app.get('/profile', isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName} <a href="/logout">Logout</a>`);
});

// Auth routes
app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/profile');
    }
);

// Logout
app.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/');
    });
});

// Auth check middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
}

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
