const express = require("express");
const { testEndpoint } = require("../controllers/endpointHealthController");

const router = express.Router();

router.post("/test", testEndpoint);

module.exports = router;
