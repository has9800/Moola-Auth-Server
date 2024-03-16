const express = require("express");
const {
  addContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactsController");

const router = express.Router();

router.post("/add-contact", addContact);
router.post("/update-contact", updateContact);
router.post("/delete-contact", deleteContact);

module.exports = router;
