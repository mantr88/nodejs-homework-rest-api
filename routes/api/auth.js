const express = require("express");

const { validateBody } = require("../../middlewares/index");

const authSchema = require("../../schemas/index");

const controller = require("../../controllers/auth/index");

const router = express.Router();

// signup
router.post("/register", validateBody(authSchema), controller.register);

// login
router.post("/login", validateBody(authSchema), controller.login);

module.exports = router;
