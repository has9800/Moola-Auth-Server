const { redis } = require("../redis/redis");

const testRedis = async (req, res) => {
  try {
    for (let key in req.body) {
      const value = req.body[key];
      const data = await redis.set(key, value);
    }
    res.send("Data set in Redis");
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while setting data in Redis.");
  }
};

module.exports = { testRedis };
