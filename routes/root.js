const express = require("express");
const { aggregateUser } = require("../controllers/aggregationController");

const router = express.Router();

router.get("/", aggregateUser); // changed to credit_account

module.exports = router;
