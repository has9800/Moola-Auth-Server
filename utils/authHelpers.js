const supabase = require("./supabase");

const getCurrentUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) return user;
};

module.exports = { getCurrentUser };
