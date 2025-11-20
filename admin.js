const express = require("express");
const Tournament = require("../models/tournament_model");

const router = express.Router();

// Create Tournament
router.post("/add", async (req, res) => {
  try {
    const t = new Tournament(req.body);
    await t.save();
    res.json({ success: true, message: "Tournament Created Successfully" });
  } catch (e) {
    res.json({ success: false, message: "Error creating tournament" });
  }
});

// Get All Tournaments
router.get("/list", async (req, res) => {
  const tournaments = await Tournament.find();
  res.json(tournaments);
});

module.exports = router;
