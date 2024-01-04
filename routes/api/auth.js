const express = require("express");

const authController = require("../../controllers/auth");
const { validateBody } = require("../../decorators");
const { authSchemas } = require("../../validators");
const { authenticate } = require("../../middlewares");

const router = express.Router();

router.post(
  "/signup",
  validateBody(authSchemas.registerSchema),
  authController.register
);

router.post(
  "/login",
  validateBody(authSchemas.loginSchema),
  authController.login
);

router.get("/current", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.logout);

module.exports = router;
