const asyncHandler = require("express-async-handler");
const Contact = require("../../models/contacts/index");

const getContactById = asyncHandler(async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findById(contactId);
  if (!contact) {
    res.status(404);
    throw new Error("Not found");
  }
  return res.status(200).json(contact);
});

module.exports = getContactById;
