const asyncHandler = require("express-async-handler");
const Contact = require("../../models/contacts/index");

const updateFavorite = asyncHandler(async (req, res) => {
  const { contactId } = req.params;
  if (!req.body) {
    res.status(400);
    throw new Error("missing field favorite");
  }
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    res.status(404);
    throw new Error("Not found");
  }
  return res.status(200).json(result);
});

module.exports = updateFavorite;
