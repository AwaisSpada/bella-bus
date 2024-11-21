const mongoose = require("mongoose");
require("dotenv").config();
const mongoDBErrors = require("mongoose-mongodb-errors");
mongoose.Promise = global.Promise;
//mongoose.plugin(mongoDBErrors);
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB is Connnected");
  } catch (error) {
    console.error(error.message);
  }
};
module.exports = connectDB;
