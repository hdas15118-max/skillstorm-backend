import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  wallet: { type: Number, default: 0 },
});

export default mongoose.model("User", userSchema);