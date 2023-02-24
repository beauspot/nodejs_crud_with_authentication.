const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

exports.connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.info("The Server is connected to The DB!");
  } catch (error) {
    return { message: error.message };
  }
};
