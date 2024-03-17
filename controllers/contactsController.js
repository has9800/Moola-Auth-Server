const supabase = require("../utils/supabase");
const evervault = require("../utils/evervault");

const addContact = async (req, res) => {
  const { data, error } = await supabase
    .from("contacts")
    .insert([
      {
        owner_id: req.body.owner_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_number: req.body.phone_number,
        city: req.body.city,
      },
    ])
    .select();

  if (error) {
    res.status(400).send({ error });
  } else {
    res.status(200).send({ data });
  }
};

const updateContact = async (req, res) => {
  const { data, error } = await supabase
    .from("contacts")
    .update({ other_column: "otherValue" })
    .eq("some_column", "someValue")
    .select();
};

const deleteContact = async (req, res) => {
  const { error } = await supabase
    .from("contacts")
    .delete()
    .eq("id", req.body.id);
};

module.exports = { addContact, updateContact, deleteContact };
