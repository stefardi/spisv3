const express = require("express");
const { getPoints, addPoint } = require("../controllers/pointController");
const router = express.Router();

router.get("/:studentId", getPoints);
router.post("/", addPoint);

module.exports = router;
