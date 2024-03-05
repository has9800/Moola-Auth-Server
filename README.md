# Moola Authentication Server

This is the backend server for Moola Inc. The file structure is as follows:

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
