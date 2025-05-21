const express = require('express');
const mongoose = require('./config/db');
const dotenv = require('dotenv');
const analyticsRoutes = require('./routes/analyticsRoutes');
const streamRoutes = require('./routes/streamRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/analytics', analyticsRoutes);
app.use('/api/stream', streamRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
