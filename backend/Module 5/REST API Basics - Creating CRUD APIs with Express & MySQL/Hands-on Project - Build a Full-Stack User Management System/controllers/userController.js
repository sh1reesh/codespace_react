const connection = require("../config/db");

exports.createUser = (req, res) => {
  const { name, email, age } = req.body;
  const query = "INSERT INTO users (name, email, age) VALUES (?, ?, ?)";
  connection.query(query, [name, email, age], (err, result) => {
    if (err) {
      console.error("Error inserting user: " + err.stack);
      return res.status(500).send("Server error");
    }
    res.status(201).send("User created successfully");
  });
};
