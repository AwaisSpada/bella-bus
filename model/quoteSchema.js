const mongoose = require("mongoose");
const quote_schema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled", "completed"],
      default: "pending",
    },
    location_from: {
      type: String,
      // required: true,
    },
    location_to: {
      type: String,
      // required: true,
    },
    selected_event: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
    pick_up_time: {
      type: String,
      // required: true,
    },

    flight_no: {
      type: String,
      // required: true,
    },
    time_required: {
      type: Number,
      // required: true,
    },
    minutes_required: {
      type: Number,
      // required: true,
    },
    price_rate: {
      type: String,
      // required: true,
    },
    distance: {
      type: String,
      // required:true,
    },
    duration: {
      type: String,
      // required:true,
    },
    description: {
      type: String,
      // required:true,
    },
    user_phoneNumber: {
      type: String,
      // required: true,
    },
    user_firstName: {
      type: String,
      // required: true,
    },
    user_lastName: {
      type: String,
      // required: true,
    },
    ride_type: {
      type: String,
      // required: true,
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "carSchema",
      // required: true,
    },
    stripe_payment_id: {
      type: String,
    },
    payments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "paymentsSchema",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("quoteSchema", quote_schema);
