const validateBody = require("./validateBody");
const authenticate = require("./authenticate");
const upload = require("./upload");
const notFoundError = require("./notFoundError");
const errorHandler = require("./errorHandler");

module.exports = {
  validateBody,
  authenticate,
  upload,
  notFoundError,
  errorHandler,
};
