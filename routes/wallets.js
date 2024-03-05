const express = require("express");
const {
  addCard,
  removeCard,
  getCard,
  testEncryption,
} = require("../controllers/walletsController");

const router = express.Router();

router.post("/add-card", addCard);
router.post("/remove-card", removeCard);
router.post("/get-card", getCard);
router.post("/test-encryption", testEncryption);

module.exports = router;
