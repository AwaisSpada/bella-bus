const mongoose = require("mongoose");
const contact_us = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email_from: {
      type: String,
    },
    email_to: {
      type: String,
    },
    message: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("contactUsSchema", contact_us);
