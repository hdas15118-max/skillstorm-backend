import express from "express";
import Tournament from "../models/tournament_model.js";

const router = express.Router();

// ➤ Create Tournament
router.post("/add", async (req, res) => {
  try {
    const t = new Tournament(req.body);
    await t.save();
    res.json({ success: true, message: "Tournament Created Successfully" });
  } catch (e) {
    res.json({ success: false, message: "Error creating tournament" });
  }
});

// ➤ Get All Tournaments
router.get("/list", async (req, res) => {
  try {
    const tournaments = await Tournament.find();
    res.json(tournaments);
  } catch (e) {
    res.json([]);
  }
});

export default router;