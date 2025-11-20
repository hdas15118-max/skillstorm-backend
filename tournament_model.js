import mongoose from "mongoose";

const tournamentSchema = new mongoose.Schema({
  title: String,
  prize: Number,
  entry: Number,
  game: String,
  roomId: String,
  password: String,
});

export default mongoose.model("Tournament", tournamentSchema);