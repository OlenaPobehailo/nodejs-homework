const express = require("express");

const authController = require("../../controllers/auth");
const { validateBody } = require("../../decorators");
const { authSchemas } = require("../../validators");
const { authenticate, upload } = require("../../middlewares");

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

router.patch("/avatars", authenticate, upload.single("avatar"), authController.updateAvatar);

module.exports = router;
