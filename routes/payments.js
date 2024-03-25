const express = require("express");
const {
  sendPayment,
  cancelPayment,
  credit_account,
} = require("../controllers/paymentsController");

const router = express.Router();

router.post("/send", sendPayment); // changed to credit_account
router.post("/canel", cancelPayment);

module.exports = router;
