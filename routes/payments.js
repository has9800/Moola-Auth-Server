const express = require("express");
const {
  sendPayment,
  cancelPayment,
} = require("../controllers/paymentsController");

const router = express.Router();

router.post("/send", sendPayment);
router.post("/canel", cancelPayment);

module.exports = router;
