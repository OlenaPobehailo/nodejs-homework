const express = require("express");

const authController = require("../../controllers/auth");
const { validateBody } = require("../../decorators");
const { authSchemas } = require("../../validators");

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

module.exports = router;
