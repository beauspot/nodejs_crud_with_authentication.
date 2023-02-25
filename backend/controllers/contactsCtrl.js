const ContactModel = require("../models/contactMod");
const { StatusCodes } = require("http-status-codes");
const asyncHandler = require("express-async-handler");
const { createCustomError } = require("../utils/customErrorClass");

exports.getAllContacts = asyncHandler(async (req, res, next) => {
  const getContacts = await ContactModel.find();
  if (getContacts.length === 0) {
    return res.status(StatusCodes.OK).json({
      lengh: getContacts.length,
      msg: `There are no Contacts in this database.`,
    });
  } else {
    return res.status(StatusCodes.OK).json({
      length: getContacts.length,
      status: "Successful",
      contact_data: getContacts,
    });
  }
});

exports.createContact = asyncHandler(async (req, res, next) => {
  const { name, email, phoneNumber } = req.body;
  const createContact = await ContactModel.create(req.body);
  if (!name || !email || phoneNumber) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `All Fields Are Mandatory!` });
  } else {
    res.status(StatusCodes.OK).json({
      status: "Successful",
      msg: "Created Contact",
      contact_data: createContact,
    });
  }
});

exports.getSingleContact = asyncHandler(async (req, res, next) => {
  const { id: contactID } = req.params;
  const contactByID = await ContactModel.findOne({ _id: contactID });
  if (!contactByID) {
    return next(
      createCustomError(
        `No contact with id: ${contactID}`,
        StatusCodes.NOT_FOUND
      )
    );
  }
  return res
    .status(StatusCodes.OK)
    .json({ status: "Successful", msg: "Data Found", data: contactByID });
});

exports.updateContact = asyncHandler(async (req, res, next) => {
  const { id: contactID } = req.params;
  const contactByID = await ContactModel.findOneAndUpdate(
    { _id: contactID },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!contactByID) {
    return next(
      createCustomError(
        `No contact wiith ID: ${contactID}`,
        StatusCodes.NOT_FOUND
      )
    );
  }
  return res
    .status(StatusCodes.ACCEPTED)
    .json({ msg: "Update Contact", contactByID });
});

exports.removeContact = asyncHandler(async (req, res, next) => {
  const { id: contactID } = req.params;
  const deleteContact = await ContactModel.findOneAndDelete({ _id: contactID });
  if (!deleteContact) {
    return next(createCustomError(`No contact wiith ID: ${contactID}`, StatusCodes.NOT_FOUND));
  }
  res
    .status(StatusCodes.OK)
    .json({ status: "Successfull", msg: "Remove Contact" });
});
