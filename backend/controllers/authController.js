const db = require("../models/db");

exports.login = (req, res) => {
  const { username, password } = req.body;

  const query = "SELECT * FROM tb_users WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(401).send("Invalid credentials");

    const user = results[0];
    res.status(200).json({ userId: user.id, role: user.role });
  });
};
