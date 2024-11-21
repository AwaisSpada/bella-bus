const mongoose = require("mongoose");
const payments_Schema = new mongoose.Schema(
  {
    // quote_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "quoteSchema",
    //   // required: true,
    // },
    amount: {
      type: Number,
      // required: true,
    },
    booked_at: {
      type: Date,
      default: Date.now(),
    },
    user_email: {
      type: String,
      //  required: true,
    },

    paymentStatus: {
      type: String,
      enum: [
        "incomplete",
        "authorized",
        "captured",
        "refunded",
        "failed",
        "Cancelled",
      ],
      default: "incomplete",
    },
    paymentIntent: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("paymentsSchema", payments_Schema);
