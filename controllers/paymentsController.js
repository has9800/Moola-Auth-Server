const supabase = require("../utils/supabase");

const sendPayment = async (req, res) => {
  res.status(200).send("Sending payment...");
};

const cancelPayment = async (req, res) => {
  res.status(200).send("Cancelling payment...");
};

module.exports = { sendPayment, cancelPayment };
