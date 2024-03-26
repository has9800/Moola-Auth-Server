const supabase = require("../utils/supabase");
const evervault = require("../utils/evervault");
const { getCurrentUser } = require("../utils/authHelpers");

const aggregateUser = async (req, res) => {
  const user = await getCurrentUser();

  if (!user) {
    res.status(200).send("No user found");
  } else {
    // get their cards
    let { data: cards, error: cardsError } = await supabase
      .from("wallets")
      .select("*")
      .eq("cardholder_id", user?.id)
      .range(0, 9);

    const decryptedCards = await evervault.decrypt(cards);
  
    // get their contacts
    let { data: contacts, error: contactsError } = await supabase
      .from("contacts")
      .select("*")
      .eq("owner_id", user?.id)
      .range(0, 9);
  
    // get their transactions
    let { data: transactions, error: transactionsError } = await supabase
      .from("transactions")
      .select("*")
      .eq("owner_id", user?.id);
    }
  
  if (!cardsError || !contactsError || !transactionsError) {
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
