// Error Handling Middleware in Express.js
// Description: Implement custom error handling middleware in an Express application.


const express = require('express');
const app = express();

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Route that works
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Route that triggers an error
app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  err.status = 500;
  next(err); // Pass the error to the error handler
});

// 404 handler for unknown routes
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

// Custom error-handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).send({
    error: {
      message: err.message || 'Internal Server Error',
      status: err.status || 500,
    },
  });
});

module.exports = app;
