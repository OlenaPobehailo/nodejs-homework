const express = require("express");

const contactsController = require("../../controllers/contacts");
const { validateBody } = require("../../decorators");
const { contactSchemas } = require("../../validators");
const { isValidId } = require("../../middlewares");

const router = express.Router();

router.get("/", contactsController.getAll);

router.post(
  "/",
  validateBody(contactSchemas.createContactSchema),
  contactsController.createContact
);

router.get("/:contactId", isValidId, contactsController.getById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(contactSchemas.createContactSchema),
  contactsController.updateById
);

router.patch(
    "/:contactId/favorite",
    isValidId,
    validateBody(contactSchemas.updateFavoriteSchema),
    contactsController.updateFavorite
  );
  

router.delete("/:contactId", isValidId, contactsController.deleteById);

module.exports = router;
