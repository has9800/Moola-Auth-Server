const evervault = require("../utils/evervault");
const axios = require("axios");

evervault.enableOutboundRelay();

const testEndpoint = async (req, res) => {
  const body = req.body;

  // const encryptedBody = await evervault.encrypt(body);

  return res.status(200).send(body);
};

const testOutboundRelay = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  await axios
    .post("https://ena5ji41racy.x.pipedream.net", {
      email: email,
      password: password,
    })
    .then((response) => {
      res.status(200).send("Sent to Request Bin");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
};

module.exports = { testEndpoint, testOutboundRelay };
