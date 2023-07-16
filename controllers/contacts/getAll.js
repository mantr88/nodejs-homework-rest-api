const Contact = require("../../models/contacts/index");

const getAll = async (req, res, next) => {
  try {
    // const { page = 1, limit = 20 } = req.query;
    // const skip = (page - 1) * limit;
    const allContacts = await Contact.find();
    return res.status(200).json(allContacts);
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
