const express = require("express");
const {
  testEndpoint,
  testOutboundRelay,
} = require("../controllers/endpointHealthController");

const router = express.Router();

router.post("/test", testEndpoint);
router.post("/outbound-relay", testOutboundRelay);

module.exports = router;
