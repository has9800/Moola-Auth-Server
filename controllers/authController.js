const supabase = require("../lib/supabase");
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

// ------------------------------- email and password sign up
const register = async (req, res, next) => {
  let { error, data: user } = await supabase.auth.signUp({
    email: req.body.email,
    password: req.body.password,
  });

  if (error) {
    res.status(400).send({ error });
  } else {
    try {
      const email = user?.user.email;
      const id = user?.user.id;
      const phone_number = user?.user.phone;

      const { error: insertError } = await supabase
        .from("users")
        .insert([
          {
            id: id,
            email: email,
            first_name: "",
            last_name: "",
            phone_number: phone_number,
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
  let { data, error } = await supabase.auth.signInWithPassword({
    email: req.body.email,
    password: req.body.password,
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

module.exports = { login, register, signout, testEncryption };
