// Creating a Schema in MongoDb with the aid of mongoose

const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  contact: {
    required: [true, "Contact is required"],
    trim: true,
    maxlength: [250, "The Contact Property cannot be more than 25 characters"],
    type: String,
  },
});

module.exports = mongoose.model("ContactModel", ContactSchema);
