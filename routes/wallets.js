const express = require("express");
const {
  addCard,
  removeCard,
  getCard,
  getCards,
} = require("../controllers/walletsController");

const router = express.Router();

router.post("/add-card", addCard);
router.post("/remove-card", removeCard);
router.post("/get-card", getCard);
router.post("/get-cards", getCards);

module.exports = router;
