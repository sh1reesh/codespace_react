const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Session configuration
app.use(session({
    secret: 'yourSecretKey',
    resave: false,
    saveUninitialized: true,
}));

// Serve static files from the 'views' directory
app.use(express.static(path.join(__dirname, 'views')));

// Dummy user credentials
const USER = { username: 'admin', password: 'password' };

// Routes
app.get('/', (req, res) => {
    res.redirect('/login.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === USER.username && password === USER.password) {
        req.session.user = username;
        res.redirect('/dashboard.html');
    } else {
        res.redirect('/error.html');
    }
});

app.get('/dashboard.html', (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login.html');
    }
});

app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login.html');
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
