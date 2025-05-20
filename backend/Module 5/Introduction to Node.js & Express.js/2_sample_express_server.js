const express = require('express');
const app = express();

// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Handle unknown routes (404)
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server Error');
});

module.exports = app;