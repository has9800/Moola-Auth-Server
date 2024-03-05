const supabase = require("../utils/supabase");
const Evervault = require("@evervault/sdk");

const evervault = new Evervault(
  process.env.EVERVAULT_APP_ID,
  process.env.EVERVAULT_API_KEY
);

const sendPayment = async (req, res) => {
  res.status(200).send("Sending payment...");
};

const cancelPayment = async (req, res) => {
  res.status(200).send("Cancelling payment...");
};

module.exports = { sendPayment, cancelPayment };
