const supabase = require("../utils/supabase");
const Evervault = require("@evervault/sdk");

const evervault = new Evervault(
  process.env.EVERVAULT_APP_ID,
  process.env.EVERVAULT_API_KEY
);

const testEncryption = async (req, res) => {
  const encrypted = await evervault.encrypt({
    card_number: req.body.card_number,
    expiry_date: req.body.expiry_date,
    cvv: req.body.cvv,
    cardholder_name: req.body.cardholder_name,
    zip_code: req.body.zip_code,
  });

  // Decrypt the encrypted data
  const decrypted = await evervault.decrypt(encrypted);

  res.status(200).send({
    encrypted,
    decrypted,
  });
};

const getCard = async (req, res) => {
  let { data: wallets, error } = await supabase.from("wallets").select("id");

  if (error) {
    res.status(400).send({ error });
  } else {
    res.send({ wallets });
  }
};

const addCard = async (req, res) => {
  const { data, error } = await supabase
    .from("wallets")
    .insert([
      {
        id: req.body.id,
        card_number: req.body.card_number,
        card_cvv: req.body.card_cvv,
        card_expiry: req.body.card_expiry,
        card_holder_full_name: req.body.card_holder_full_name,
        card_holder_zip_code: req.body.card_holder_zip_code,
      },
    ])
    .select();

  if (error) {
    res.status(400).send({ error });
  } else {
    res.status(200).send("Card added successfully.");
  }
};

const removeCard = async (req, res) => {
  return;
};

module.exports = { addCard, removeCard, getCard, testEncryption };

/**
 * I'm setting up encryption/decryption,
 * I need to be able to add and encrypt card,
 * I also need to be able to get and decrypt card
 *
 *
 * Should I add encryption col and fetch based on the encryption, decrypt, then send?
 */
