const express = require('express');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
require('./config/passport');

const app = express();

app.use(express.json());
app.use(session({ secret: 'session_secret', resave: false, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('JWT + Google OAuth Authentication');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
