// Implementing Routes with Parameters in Express.js
// Description: Create an Express route that accepts a parameter and respond accordingly.



const express = require('express');
const app = express();

// Logging middleware
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url}`);
  next();
});

// Route with parameter
app.get('/greet/:name', (req, res) => {
  const userName = req.params.name;
  res.send(`Hello, ${userName}!`);
});

// Default route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Server Error');
});

module.exports = app;