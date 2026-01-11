const mongoose = require("mongoose");

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB connection failed", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;