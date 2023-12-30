const express = require("express");

const contactsController = require("../../controllers/contacts");
const { validateBody } = require("../../decorators");
const { contactSchemas } = require("../../validators");

const router = express.Router();

router.get("/", contactsController.getAll);

router.post(
  "/",
  validateBody(contactSchemas.createContactSchema),
  contactsController.createContact
);

router.get("/:contactId", contactsController.getById);

router.put(
  "/:contactId",
  validateBody(contactSchemas.createContactSchema),
  contactsController.updateById
);

router.delete("/:contactId", contactsController.deleteById);

module.exports = router;
