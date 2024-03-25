const supabase = require("../utils/supabase");
const evervault = require("../utils/evervault");
const { getCurrentUser } = require("../utils/authHelpers");

// When a user wants to replace card, call the remove-card route, then add a new card

const getCard = async (req, res) => {
  let { data: card, error } = await supabase
    .from("wallets")
    .select("*")
    .eq("card_id", req.body.card_id);

  const decryptedCard = await evervault.decrypt(card);

  if (error) {
    res.status(400).send({ error });
  } else {
    res.send({ decryptedCard });
  }
};

const getCards = async (req, res) => {
  const user = await getCurrentUser();

  let { data: cards, error } = await supabase
    .from("wallets")
    .select("*")
    .eq("cardholder_id", user.id)
    .range(0, 9);

  const decryptedCards = await evervault.decrypt(cards);

  if (error) {
    res.status(400).send(error);
  } else {
    res.status(200).send(decryptedCards);
  }
};

const addCard = async (req, res) => {
  const user = await getCurrentUser();

  const { data, error } = await supabase
    .from("wallets")
    .insert([
      {
        cardholder_id: user.id,
        card_number: await evervault.encrypt(req.body.card_number),
        card_cvv: await evervault.encrypt(req.body.card_cvv),
        card_expiry: await evervault.encrypt(req.body.card_expiry),
        cardholder_full_name: await evervault.encrypt(
          req.body.cardholder_full_name
        ),
        cardholder_zip_code: await evervault.encrypt(
          req.body.cardholder_zip_code
        ),
      },
    ])
    .single();

  if (error) {
    res.status(400).send({ error });
  } else {
    res.status(200).send("Card added successfully.");
  }
};

const removeCard = async (req, res) => {
  const { error } = await supabase
    .from("wallets")
    .delete()
    .eq("card_id", req.body.card_id);

  if (error) {
    res.status(400).send(error);
  } else {
    res.status(200).send("Card removed successfully...");
  }
};

module.exports = { addCard, removeCard, getCard, getCards };
