// const supabase = require("../lib/supabase");

// const insertNewUser = () => {
//   unsubscribe = supabase.auth.onAuthStateChange(async (event, session) => {
//     if (event === "SIGNED_IN" && session) {
//       const { user } = session;
//       const { email, user_metadata } = user;
//       const { first_name, last_name, phone_number } = user_metadata;

//       await supabase
//         .from("users")
//         .insert([
//           {
//             id: user.id,
//             email,
//             first_name,
//             last_name,
//             phone_number,
//             // other fields can be null and updated later
//           },
//         ])
//         .single();
//     }
//   });
// };

// const stopListening = () => {
//   if (unsubscribe) {
//     unsubscribe();
//   }
// };

// module.exports = { insertNewUser, stopListening };
