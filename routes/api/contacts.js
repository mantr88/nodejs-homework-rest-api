const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares/index");

const { addSchema, updateFavorite } = require("../../schemas/index");

router.get("/", ctrl.getAll);

router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(addSchema), ctrl.addContact);

router.delete("/:contactId", ctrl.deleteContact);

router.put("/:contactId", validateBody(addSchema), ctrl.updateContact);

router.patch(
  "/:contactId/favorite",
  validateBody(updateFavorite),
  ctrl.updateFavorite
);

module.exports = router;
