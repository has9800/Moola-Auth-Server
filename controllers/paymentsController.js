const supabase = require("../utils/supabase");
const axios = require("axios").default;
const {
  pre_authorize_payment,
  commit_payment,
} = require("../utils/paymentHelpers/pre_authorize");

const sendPayment = async (req, res) => {
  try {
    const data = await pre_authorize_payment(req);

    await axios
      .post("https://sandbox.waafipay.net/asm", data)
      .then(async (axiosResponse) => {
        const final_result = await commit_payment(
          axiosResponse.data.params.transactionId,
          axiosResponse.data.params.txAmount
        );

        res.status(200).send(final_result);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const cancelPayment = async (req, res) => {
  // const data = await commit_payment(transaction_id, transaction_amount);

  res.status(200).send("Cancelling payment...");
};

module.exports = { sendPayment, cancelPayment };
