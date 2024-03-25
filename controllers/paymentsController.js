const supabase = require("../utils/supabase");
const axios = require("axios").default;
const {
  pre_authorize_payment,
  commit_payment,
  credit_account_helper,
} = require("../utils/paymentHelpers/pre_authorize");
const { getCurrentUser } = require("../utils/authHelpers");

const sendPayment = async (req, res) => {
  try {
    const data = await pre_authorize_payment(req);

    const user = await getCurrentUser();

    await axios
      .post("https://sandbox.waafipay.net/asm", data)
      .then(async (axiosResponse) => {
        const final_result = await commit_payment(
          axiosResponse.data.params.transactionId,
          axiosResponse.data.params.txAmount
        );

        const { data, error } = await supabase
          .from("transactions")
          .insert([
            {
              transaction_id: final_result.params.transactionId,
              reference_id: final_result.params.referenceId,
              amount: axiosResponse.data.params.txAmount,
              receiver_number: req.body.receiver_number,
              receiver_full_name: req.body.receiver_first_name.concat(
                "",
                req.body.reciever_last_name
              ),
              owner_id: user.id,
            },
          ])
          .select();

        if (error) console.log("supabase insert error: " + error.message);

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

const credit_account = async (req, res) => {
  try {
    const data = await credit_account_helper(req);

    const user = await getCurrentUser();

    await axios
      .post("https://sandbox.waafipay.net/asm", data)
      .then(async (response) => {
        const { data, error } = await supabase
          .from("transactions")
          .insert([
            {
              transaction_id: response.data.params.transactionId,
              reference_id: response.data.params.referenceId,
              amount: response.data.params.txAmount,
              owner_id: user.id,
            },
          ])
          .select();

        if (error) console.log("supabase insert error: " + error);

        res.status(200).send(response.data);
      });
  } catch (error) {
    res.status(400).send(error);
  }
};

const cancelPayment = async (req, res) => {
  res.status(200).send("Cancelling payment...");
};

module.exports = { sendPayment, cancelPayment, credit_account };
