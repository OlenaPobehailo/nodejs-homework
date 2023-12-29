const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(contacts);
};

const getContactById = async (contactId) => {
  const stringId = String(contactId);
  const allContacts = await listContacts();
  const oneContact = allContacts.find((item) => item.id === stringId);
  return oneContact || null;
};

const removeContact = async (contactId) => {
  const stringId = String(contactId);
  const allContacts = await listContacts();
  const index = allContacts.findIndex((item) => item.id === stringId);

  if (index === -1) {
    return null;
  }

  const [deletedContact] = allContacts.splice(index, 1);

  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

  return deletedContact;
};

const addContact = async ({ name, email, phone }) => {
  const allContacts = await listContacts();

  const newContact = {
    name,
    email,
    phone,
    id: nanoid(),
  };

  allContacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

  return newContact;
};

const updateContact = async (contactId, contact) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((elem) => elem.id === contactId);
  if (index === -1) {
    return null;
  }
  contacts[index] = { id: contactId, ...contact };

  const contactsJSON = JSON.stringify(contacts, null, 2);

  await fs.writeFile(contactsPath, contactsJSON);

  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
