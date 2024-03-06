const axios = require("axios").default;

// pre-authorize a payment initiated by the user
const pre_authorize_payment = (req) => {
  const PRE_AUTHORIZE = {
    schemaVersion: "1.0",
    requestId: "2188441461",
    timestamp: "2024-02-29 Standard",
    channelName: "WEB",
    serviceName: "API_PREAUTHORIZE",
    serviceParams: {
      merchantUid: "M0912269",
      apiUserId: "1000297",
      apiKey: "API-1901083745AHX",
      paymentMethod: "MWALLET_ACCOUNT",
      payerInfo: {
        accountNo: "252615414470",
      },
      transactionInfo: {
        referenceId: "11111",
        invoiceId: "22222",
        amount: req.body.amount,
        currency: "USD",
        description: req.body.message,
        paymentBrand: "EVCPLUS",
        transactionCategory: "ECOMMERCE",
      },
    },
  };

  return PRE_AUTHORIZE;
};

// commit a payment
const commit_payment = async (transaction_id, transaction_amount) => {
  const COMMIT = {
    schemaVersion: "1.0",
    requestId: "1832183237",
    timestamp: "2024-02-29 Standard",
    channelName: "WEB",
    serviceName: "API_PREAUTHORIZE_COMMIT",
    serviceParams: {
      merchantUid: "M0912269",
      apiUserId: "1000297",
      apiKey: "API-1901083745AHX",
      transactionId: transaction_id,
      description: "Commited",
      referenceId: "11111",
      txAmount: transaction_amount,
    },
  };

  try {
    const response = await axios.post(
      "https://sandbox.waafipay.net/asm",
      COMMIT
    );
    return response.data; // This will be returned to the sendPayment function
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = { pre_authorize_payment, commit_payment };
