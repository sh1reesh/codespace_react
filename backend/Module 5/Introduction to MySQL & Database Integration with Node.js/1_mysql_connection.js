// Installing MySQL Package and Creating a Connection in Node.js
// Description: install the MySQL3 package(use latest one), and create a connection to MySQL.
// Create a database and create a Student table


onst mysql = require('mysql2');

// Create a connection to the MySQL server (adjust credentials)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password' // <-- Replace with your actual password
});

// Connect and run queries
connection.connect((err) => {
  if (err) {
    console.error('❌ Connection error:', err);
    return;
  }
  console.log('✅ Connected to MySQL');

  // Step 1: Create 'school' database
  connection.query('CREATE DATABASE IF NOT EXISTS school', (err) => {
    if (err) throw err;
    console.log("✅ Database 'school' created or already exists");

    // Step 2: Use the 'school' database
    connection.changeUser({ database: 'school' }, (err) => {
      if (err) throw err;

      // Step 3: Create 'Student' table
      const createTableSQL = `
        CREATE TABLE IF NOT EXISTS Student (
          ID INT AUTO_INCREMENT PRIMARY KEY,
          Name VARCHAR(100) NOT NULL,
          Age INT NOT NULL
        )
      `;
      connection.query(createTableSQL, (err) => {
        if (err) throw err;
        console.log("✅ Table 'Student' created or already exists");

        // Done
        connection.end();
      });
    });
  });
});
