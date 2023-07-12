const { addSchema, updateFavorite } = require("./contactsShema");
const { registerShema, loginShema } = require("./authShema.js");
module.exports = {
  addSchema,
  updateFavorite,
  registerShema,
  loginShema,
};
