const mongoose = require("mongoose");
const user_schema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phonenumber: { type: Number },
    license: { type: String },
    // Identity_card_no: { type: String },
    vehicle_registration_no: { type: String },
    role: {
      type: String,
      enum: ["customer", "driver"],
      default: "driver",
    },
    status: {
      type: String,
      enum: ["pending", "approved"],
      default: "pending",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("userSchema", user_schema);
