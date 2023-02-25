// Creating a Schema in MongoDb with the aid of mongoose

const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      required: [true, "Contact is required"],
      trim: true,
      maxlength: [60, "The Contact Property cannot be more than 25 characters"],
      type: String,
    },
    email: {
      required: [true, "Email is required"],
      trim: true,
      maxlength: [250, "The email Property cannot be more than 250 characters"],
      type: String,
    },
    phone: {
      required: [true, "Phone Number is required"],
      trim: true,
      maxlength: [
        11,
        "The Phone Number Property cannot be more than 11 characters",
      ],
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ContactModel", ContactSchema);
