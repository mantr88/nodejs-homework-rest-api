const express = require("express");

const { validateBody } = require("../../middlewares/index");

const { registerShema, loginShema } = require("../../schemas/index");

const controller = require("../../controllers/auth/index");

const router = express.Router();

// signup
router.post("/register", validateBody(registerShema), controller.register);

module.exports = router;
