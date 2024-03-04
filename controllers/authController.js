const supabase = require("../lib/supabase");

// const { insertNewUser, stopListening } = require("../db/newUserTrigger");

// ------------------------------- email and password sign up
const register = async (req, res, next) => {
  let { error, user } = await supabase.auth.signUp({
    email: req.body.email,
    password: req.body.password,
  });

  console.log(user);

  if (error) {
    res.status(400).send({ error });
  } else {
    try {
      // const { user_metadata } = user;
      // const { email } = user_metadata;

      // const { data, error: insertError } = await supabase
      //   .from("users")
      //   .insert([
      //     {
      //       id: user.id,
      //       email: email,
      //       first_name,
      //       // last_name,
      //       // phone_number,
      //       // other fields can be null and updated later
      //     },
      //   ])
      //   .single();

      // if (insertError) {
      //   throw insertError;
      // }

      res.status(200).send({ user });
    } catch (err) {
      next(err);
    }
  }
};

// ------------------------------- email and password sign in
const login = async (req, res, next) => {
  // console.log(req.body);

  let { user, error } = await supabase.auth.signInWithPassword({
    email: req.body.email,
    password: req.body.password,
  });

  if (error) {
    res.status(400).send({ error });
  } else {
    res.status(200).send({ user });
  }
};

// ------------------------------- signout
const signout = async (req, res) => {
  stopListening();

  let { error } = await supabase.auth.signOut();

  if (error) {
    res.status(400).send({ error });
  } else {
    res.status(200).send();
  }
};

module.exports = { login, register, signout };
