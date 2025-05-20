// Querying MySQL from Node.js Application
// Description: Write a Node.js script to query all students whose age is greater than 14 from the students table.


const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password', // 🔁 Replace with your actual password
  database: 'school'
});

// Connect and run the SELECT query
connection.connect((err) => {
  if (err) {
    console.error('❌ Connection error:', err);
    return;
  }
  console.log('✅ Connected to MySQL');

  const query = 'SELECT * FROM Student WHERE Age > ?';
  const ageThreshold = 14;

  connection.query(query, [ageThreshold], (err, results) => {
    if (err) throw err;

    console.log('📋 Students older than 14:');
    results.forEach(student => {
      console.log(`- ID: ${student.ID}, Name: ${student.Name}, Age: ${student.Age}`);
    });

    connection.end();
  });
});