const express = require("express");
const {
  addCard,
  removeCard,
  getCard,
} = require("../controllers/walletsController");

const router = express.Router();

router.post("/add-card", addCard);
router.post("/remove-card", removeCard);
router.post("/get-card", getCard);

module.exports = router;
