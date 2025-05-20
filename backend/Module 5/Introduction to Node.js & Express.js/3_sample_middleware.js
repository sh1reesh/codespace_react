// Understanding Middlewares
// Description: Write middleware in Express.js to log all incoming requests.

// Steps:
// 1. Update the current file with a logging middleware
// 2. Observe the console output to see logs of incoming requests.


const express = require('express');
const app = express();

// Step 1: Logging Middleware
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.url}`);
  next(); // Proceed to the next middleware/route
});

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
  console.error('Error:', err.stack);
  res.status(500).send('Server Error');
});

module.exports = app;