const evervault = require("../utils/evervault");
const axios = require("axios");

evervault.enableOutboundRelay();

const testEndpoint = async (req, res) => {
  const body = req.body;

  return res.status(200).send(body);
};

const testOutboundRelay = async (req, res) => {
  return await axios
    .post("https://ena5ji41racy.x.pipedream.net", {
      email: req.body.email,
      password: req.body.password,
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
