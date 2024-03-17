const supabase = require("../utils/supabase");
const evervault = require("../utils/evervault");

evervault.enableOutboundRelay();

const updateProfile = async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .update({
      first_name: await evervault.encrypt(),
      last_name: await evervault.encrypt(),
      phone_number: await evervault.encrypt(),
      country: await evervault.encrypt(),
      city: await evervault.encrypt(),
      zip_code: await evervault.encrypt(),
      address_1: await evervault.encrypt(),
      address_2: await evervault.encrypt(),
    })
    .eq("id", req.body.id)
    .single();

  if (error) {
    res.status(400).send({ error });
  } else {
    res.status(200).send({ data });
  }
};

module.exports = { updateProfile };
