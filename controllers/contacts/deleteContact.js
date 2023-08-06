const asyncHandler = require("express-async-handler");
const Contact = require("../../models/contacts/index");

const deleteContact = asyncHandler(async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndRemove(contactId);
  if (!contact) {
    res.status(404);
    throw new Error("Not found");
  }
  return res.status(200).json({ message: "contact deleted" });
});

module.exports = deleteContact;
