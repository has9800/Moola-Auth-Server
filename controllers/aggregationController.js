const supabase = require("../utils/supabase");
const evervault = require("../utils/evervault");
const { getCurrentUser } = require("../utils/authHelpers");

const aggregateUser = async (req, res) => {
  const user = await getCurrentUser();

  let cardsError, contactsError, transactionsError;
  let decryptedCards, contacts, transactions;

  if (!user) {
    res.status(200).send("No user found");
  } else {
    // get their cards
    let { data: cards, error } = await supabase
      .from("wallets")
      .select("*")
      .eq("cardholder_id", user?.id)
      .range(0, 9);
    cardsError = error;

    decryptedCards = await evervault.decrypt(cards);
  
    // get their contacts
    let { data, error: error1 } = await supabase
      .from("contacts")
      .select("*")
      .eq("owner_id", user?.id)
      .range(0, 9);
    contacts = data;
    contactsError = error1;
  
    // get their transactions
    let { data: data1, error: error2 } = await supabase
      .from("transactions")
      .select("*")
      .eq("owner_id", user?.id);
    transactions = data1;
    transactionsError = error2;
  }
  
  if (!cardsError && !contactsError && !transactionsError) {
    res.status(200).send({
      decryptedCards,
      contacts,
      transactions,
    });
  } else {
    res.status(400).send({
      cardsError,
      contactsError,
      transactionsError,
    });
  }
};

module.exports = { aggregateUser };
