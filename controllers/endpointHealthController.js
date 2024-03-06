const evervault = require("../utils/evervault");

// evervault.enableOutboundRelay();

const testEndpoint = async (req, res) => {
  const body = req.body;

  // const encryptedBody = await evervault.encrypt(body);

  return res.status(200).send(body);
};

module.exports = { testEndpoint };
