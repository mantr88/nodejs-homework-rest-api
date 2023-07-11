const Contact = require("../../models/contacts/index");

const getAll = async (req, res, next) => {
  try {
    const allContacts = await Contact.find();
    return res.status(200).json(allContacts);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
