# Moola Authentication Server
This is the backend server for Moola Inc.

Server API endpoint urls:
- Moola Inc backend (without encryption proxy): https://moola-auth-server.onrender.com
- Moola Inc backend (with encryption proxy): https://moola-auth-server-onrender-com.relay.evervault.com


Server endpoints and their required parameters in json:
```bash
/auth
----- /signup            ...POST...{email, password}
----- /login             ...POST...{email, password}
----- /signout           ...POST...{no params}

/wallets
------ /add-card         ...POST...{user_id, card_number, cvv, expiry, f_name, zip_code}
------ /replace-card     ...POST...{user_id, card_id}
------ /get-card(s)      ...POST...{user_id, and card_id if /get-card}
------ /delete-card      ...POST...{user_id, card_id}

/payments
------ /send             ...POST...{message, amount, receiver_first_name, receiver_last_name, number}
------ /cancel           ...POST...{in progress do not call}

/endpoint
------- /test            ...POST...{message, user}
------ /outbound-relay   ...POST...{email, password}
```

The file structure is as follows:

```bash
- Controllers
------ authController
------ paymentsController
------ walletsController
- Routes
------ auth
------ payments
------ wallets
- Utils
------ supabase
------ protoSchemas
------------ UserSchema
- Proto
------ card.proto
------ users.proto
------ card_pb
------ users_pb
- Server.js (entry)
```

### Overview

The server takes requests from the mobile app UI and provides the backend functionality, the key features are:

```bash
- Sign up  ---> POST ---> Create a new user on supabase & create a new database entry in the 'users' table
- Sign in  ---> POST ---> Sign the user in using supabase and return the user, session, and tokens
- Sign out ---> POST ---> Log the user out and destroy the tokens, session, and unsubscribe to any `onAuthStateChanges`

- Send a payment   ---> POST ---> Take a users payment data, fetch the contact where the key matches from the db, forward to 3rd party, return data
- Cancel a payment ---> POST ---> Take the returned data, and forward it to 3rd party to cancel payment where tx number matches

- Add contact    ---> POST ---> User sends contact info, add to the 'contacts' table, point to it using key
- Update contact ---> POST ---> User sends updated contact info, update supabase 'contacts' entry where key matches
- Delete contact ---> POST ---> User sends contact ID, delete 'contacts' entry based on key

- Add card    ---> POST ---> User sends card data encrypted on client, store encrypted in 'wallets' table
- Update card ---> POST ---> User sends new encrypted card information, delete old entry, create a new one in 'wallets'
- Delete card ---> POST ---> User sends card ID, delete without decrypting from 'wallets'
```

### Server technical details

- **Express** based
- **Supabase JS SDK** for authentication, file storage, Postgres database
- **Morgan** for server logs
- **Redis** cache for storing logs on Upstash
- **Evervault** for encryption/decryption (proxy server for inbound and outbound requests)
- **gRPC client** for request handling serialized protocol buffers for faster server requests [In Progress...]
- **Render** for deploying the server, scaling, and privatization


Moola Inc - 2024
