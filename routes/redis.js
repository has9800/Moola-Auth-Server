const express = require("express");

const router = express.Router();

const { testRedis } = require("../controllers/redisCache");

router.post("/redis", testRedis);

module.exports = router;
