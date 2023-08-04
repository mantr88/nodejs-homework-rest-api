const asyncHandler = require("express-async-handler");

const Contact = require("../../models/contacts/index");

const addContact = asyncHandler(async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await Contact.create({ ...req.body, owner });
  return res.status(201).json(result);
});

module.exports = addContact;
