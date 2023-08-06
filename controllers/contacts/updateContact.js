const asyncHandler = require("express-async-handler");
const Contact = require("../../models/contacts/index");

const updateContact = asyncHandler(async (req, res, next) => {
  const { contactId } = req.params;
  const contact = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };
  const result = await Contact.findByIdAndUpdate(contactId, contact, {
    new: true,
  });
  if (!result) {
    res.status(404);
    throw new Error("Not found");
  }
  return res.status(200).json(result);
});

module.exports = updateContact;
