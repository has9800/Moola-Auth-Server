const evervault = require("../utils/evervault");
const axios = require("axios").default;

evervault.enableOutboundRelay();

const testEndpoint = async (req, res) => {
  const body = req.body;

  return res.status(200).send(body);
};

const testOutboundRelay = async (req, res) => {
  console.log(req.body)
  
  return await axios
    .post("https://eotrci0c7bk0uat.m.pipedream.net", {
      email: req.body.email,
      password: req.body.password,
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
