import express from "express";
import crypto from "crypto";

const router = express.Router();

// Payment verification route
router.post("/verify", (req, res) => {
  const { order_id, payment_id, signature } = req.body;

  const secret = "RAZORPAY_SECRET_KEY"; // <-- apni secret key daalna

  const hash = crypto
    .createHmac("sha256", secret)
    .update(order_id + "|" + payment_id)
    .digest("hex");

  if (hash === signature) {
    res.json({ success: true, message: "Payment Verified" });
  } else {
    res.json({ success: false, message: "Invalid Payment" });
  }
});

export default router;