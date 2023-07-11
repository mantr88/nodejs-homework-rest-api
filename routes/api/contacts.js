const express = require("express");
const router = express.Router();

const controller = require("../../controllers/contacts/index");
const { validateBody } = require("../../middlewares/index");

const { addSchema, updateFavorite } = require("../../schemas/index");

router.get("/", controller.getAll);

router.get("/:contactId", controller.getContactById);

router.post("/", validateBody(addSchema), controller.addContact);

router.delete("/:contactId", controller.deleteContact);

router.put("/:contactId", validateBody(addSchema), controller.updateContact);

router.patch(
  "/:contactId/favorite",
  validateBody(updateFavorite),
  controller.updateFavorite
);

module.exports = router;
