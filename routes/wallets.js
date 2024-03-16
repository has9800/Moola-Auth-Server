const express = require("express");
const {
  addCard,
  removeCard,
  getCard,
  getCards,
  replaceCard,
} = require("../controllers/walletsController");

const router = express.Router();

router.post("/add-card", addCard);
router.post("/remove-card", removeCard);
router.post("/get-card", getCard);
router.post("/get-cards", getCards);
router.post("/replace-card", replaceCard);

module.exports = router;
