const evervault = require("../utils/evervault");
const axios = require("axios").default;

evervault.enableOutboundRelay();

const testEndpoint = async (req, res) => {
  const body = req.body;

  return res.status(200).send(body);
};

const testOutboundRelay = async (req, res) => {
  return await axios
    .post("https://ena5ji41racy.x.pipedream.net", {
      email: await evervault.encrypt(req.body.email),
      password: await evervault.encrypt(req.body.password),
    })
    .then(() => {
      res.status(200).send("Sent to 3rd party");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
};

module.exports = { testEndpoint, testOutboundRelay };
