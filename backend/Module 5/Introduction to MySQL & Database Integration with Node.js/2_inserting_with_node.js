// Inserting Data into MySQL from Node.js Application
// Description: Write a Node.js script to insert a new student record into the students table.



const mysql = require('mysql2');

// Create a connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password', // 🔁 Replace with your actual password
  database: 'school'
});

// Connect and insert a new student
connection.connect((err) => {
  if (err) {
    console.error('❌ Connection failed:', err);
    return;
  }
  console.log('✅ Connected to MySQL');

  const insertQuery = 'INSERT INTO Student (Name, Age) VALUES (?, ?)';
  const studentData = ['John Doe', 16]; // 🔁 Modify this data as needed

  connection.query(insertQuery, studentData, (err, results) => {
    if (err) throw err;
    console.log(`✅ Student inserted with ID: ${results.insertId}`);

    connection.end();
  });
});