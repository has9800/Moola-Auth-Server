const supabase = require("../utils/supabase");
const evervault = require("../utils/evervault");

const updateProfile = async (req, res) => {
  const { data, error } = await supabase
    .from("users")
    .update({ other_column: "otherValue" })
    .eq("some_column", "someValue")
    .select();
};

module.exports = { updateProfile };
