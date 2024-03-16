const supabase = require("../utils/supabase");
const evervault = require("../utils/evervault");

// ------------------------------- email and password sign up
const register = async (req, res, next) => {
  const decrypted_email = await evervault.decrypt(req.body.email);
  const decrypted_password = await evervault.decrypt(req.body.password);

  let { error, data: user } = await supabase.auth.signUp({
    email: decrypted_email,
    password: decrypted_password,
  });

  if (error) {
    res.status(400).send({ error });
  } else {
    try {
      const email = user?.user.email;
      const id = user?.user.id;

      const { error: insertError } = await supabase
        .from("users")
        .insert([
          {
            id: id,
            email: await evervault.encrypt(email),
            first_name: "",
            last_name: "",
            phone_number: "",
            country: "",
            city: "",
            zip_code: "",
            address_1: "",
            address_2: "",
          },
        ])
        .select();

      if (insertError) {
        res.send({ insertError });
      }

      res.status(200).send({ user: user });
    } catch (err) {
      next(err);
    }
  }
};

// ------------------------------- email and password sign in
const login = async (req, res, next) => {
  const decrypted_email = await evervault.decrypt(req.body.email);
  const decrypted_password = await evervault.decrypt(req.body.password);

  let { data, error } = await supabase.auth.signInWithPassword({
    email: decrypted_email,
    password: decrypted_password,
  });

  if (error) {
    res.status(400).send({ error });
  } else {
    res.status(200).send({ data });
  }
};

// ------------------------------- signout
const signout = async (req, res) => {
  let { error } = await supabase.auth.signOut();

  if (error) {
    res.status(400).send({ error });
  } else {
    res.status(200).send("Signed out successfully");
  }
};

module.exports = { login, register, signout };
