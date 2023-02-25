const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("The Server is connected to The DB!");
  } catch (error) {
    return { message: error };
  }
};

module.exports = connectDB;