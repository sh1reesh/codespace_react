const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password', // 🔁 Replace with your MySQL password
  database: 'school'
});

db.connect(err => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL');
});

// -------------------------------
// CRUD Routes for Student Table
// -------------------------------

// Create a new student
app.post('/students', (req, res) => {
  const { Name, Age } = req.body;
  const sql = 'INSERT INTO Student (Name, Age) VALUES (?, ?)';
  db.query(sql, [Name, Age], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ message: 'Student added', studentId: result.insertId });
  });
});

// Read all students
app.get('/students', (req, res) => {
  db.query('SELECT * FROM Student', (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
});

// Read student by ID
app.get('/students/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Student WHERE ID = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).send({ message: 'Student not found' });
    res.status(200).json(result[0]);
  });
});

// Update student by ID
app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  const { Name, Age } = req.body;
  const sql = 'UPDATE Student SET Name = ?, Age = ? WHERE ID = ?';
  db.query(sql, [Name, Age, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send({ message: 'Student updated' });
  });
});

// Delete student by ID
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Student WHERE ID = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send({ message: 'Student deleted' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});