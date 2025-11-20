import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import adminRoutes from "./routes/admin.js";
import paymentRoutes from "./routes/payment_verify.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch(() => console.log("MongoDB Error"));

// Test route
app.get("/", (req, res) => {
  res.send("SkillStorm Backend Running...");
});

// Admin Panel Routes
app.use("/admin", adminRoutes);

// Payment Verification Routes
app.use("/payment", paymentRoutes);

// Start server
app.listen(5000, () => {
  console.log("SkillStorm server running at http://localhost:5000");
});