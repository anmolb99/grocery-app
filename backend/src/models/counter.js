import mongoose from "mongoose";

const counterSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true },
  sequence_value: { type: String, default: 0 },
});

const Counter = mongoose.model("Counter", counterSchema);
export default Counter;
