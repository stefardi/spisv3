const db = require("../models/db");

exports.getPoints = (req, res) => {
  const { studentId } = req.params;

  const query = "SELECT * FROM tb_pelanggaran WHERE student_id = ?";
  db.query(query, [studentId], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
};

exports.addPoint = (req, res) => {
  const { studentId, teacherId, waliId, type_id, note, point } = req.body;

  const query =
    "INSERT INTO tb_pelanggaran (student_id, teacher_id, wali_id, type_id, note, point) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(query, [studentId, teacherId, waliId, type_id, note, point], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).send("Point added successfully");
  });
};
