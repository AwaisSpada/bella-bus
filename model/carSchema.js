const mongoose = require("mongoose");
const car_schema = new mongoose.Schema(
  {
    car_name: {
      type: String,
      enum: ["SUV", "Sedan", "Bus"],
      required: true,
    },
    no_of_passengers: {
      type: Number,
      // required: true,
    },
    allowed_buggage: {
      type: Number,
    },
    // per_mile_rate: {
    //   type: Number,
    //   // required: true,
    // },
    // per_minute_rate: {
    //   type: Number,
    //   // required: true,
    // },
    per_hour_rate: {
      type: Number,
      // required: true,
    },
    commision: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("carSchema", car_schema);
