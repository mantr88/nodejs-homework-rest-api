const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const contactsPath = path.join(__dirname, "./contacts.json");

const listContacts = async () => {
  try {
    const contacts = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(contacts);
  } catch (error) {
    console.log(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const items = await listContacts();
    const result = items.find((item) => item.id === contactId);
    return result || null;
  } catch (error) {
    console.log(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const items = await listContacts();
    const index = items.findIndex((item) => item.id === contactId);
    if (index === -1) {
      return null;
    }
    const [result] = items.splice(index, 1);
    await fs.writeFile(contactsPath, JSON.stringify(items, null, 2));
    return result;
  } catch (error) {
    console.log(error);
  }
};

const addContact = async (body) => {
  try {
    const items = await listContacts();
    const newContact = { id: crypto.randomUUID(), ...body };
    items.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(items, null, 2));
    return newContact;
  } catch (error) {
    console.log(error);
  }
};

const updateContact = async (contactId, body) => {
  const items = await listContacts();
  const index = items.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  items[index] = {
    contactId,
    ...body,
  };
  await fs.writeFile(contactsPath, JSON.stringify(items, null, 2));
  return items[index];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
