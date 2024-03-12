const supabase = require("../utils/supabase");

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
        card_holder_id: req.body.id,
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
  res.status(200).send("Card removed...");
};

module.exports = { addCard, removeCard, getCard };
