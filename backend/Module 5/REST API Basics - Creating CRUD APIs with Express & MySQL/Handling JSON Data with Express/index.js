const express = require('express');
const app = express();
const port = 3000;

// ✅ Middleware to parse incoming JSON
app.use(express.json());

// ✅ POST endpoint to receive JSON data
app.post('/students', (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ error: 'Missing name or age in request body' });
  }

  // For demonstration purposes, just respond with the received data
  res.status(201).json({
    message: 'Student data received successfully',
    student: {
      name,
      age
    }
  });
});

// ✅ Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});