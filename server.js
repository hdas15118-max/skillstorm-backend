const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const adminRoutes = require("./routes/admin");
const paymentRoutes = require("./routes/payment_verify");

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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SkillStorm server running at port ${PORT}`);
});
