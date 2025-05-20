const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// -------------------
// CRUD Routes
// -------------------

// CREATE student
app.post('/students', (req, res) => {
  const { Name, Age } = req.body;
  const sql = 'INSERT INTO Student (Name, Age) VALUES (?, ?)';
  db.query(sql, [Name, Age], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).send({ message: 'Student created', id: result.insertId });
  });
});

// READ all students
app.get('/students', (req, res) => {
  db.query('SELECT * FROM Student', (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
});

// READ student by ID
app.get('/students/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM Student WHERE ID = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).send({ message: 'Student not found' });
    res.status(200).json(result[0]);
  });
});

// UPDATE student
app.put('/students/:id', (req, res) => {
  const { id } = req.params;
  const { Name, Age } = req.body;
  db.query('UPDATE Student SET Name = ?, Age = ? WHERE ID = ?', [Name, Age, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send({ message: 'Student updated' });
  });
});

// DELETE student
app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM Student WHERE ID = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send({ message: 'Student deleted' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});