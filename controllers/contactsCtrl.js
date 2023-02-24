const ContactModel = require("../models/contactMod");

exports.getAllContacts = (req, res, next) => {
  res.json({ msg: "Display All Contacts" });
};

exports.createContact = (req, res, next) => {
  res.json({ msg: "Create Contact" });
};

exports.getSingleContact = (req, res, next) => {
  res.json({ msg: "Get Single Contact" });
};

exports.updateContact = (req, res, next) => {
  res.json({ msg: "Update Contact" });
};

exports.removeContact = (req, res, next) => {
  res.json({ msg: "Remove Contact" });
};
