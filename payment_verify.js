const express = require("express");
const crypto = require("crypto");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

router.post("/verify", (req, res) => {
  const { order_id, payment_id, signature } = req.body;

  const secret = process.env.RAZORPAY_SECRET;

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

module.exports = router;
