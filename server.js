require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { redis } = require("./redis/redis");
const PORT = process.env.PORT || 8001;

// import routes
const authRoutes = require("./routes/auth");
const walletRoutes = require("./routes/wallets");
const paymentsRoutes = require("./routes/payments");
const endpointTestRoute = require("./routes/endpointHealth");

// parsing midd
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// server logging
const stream = {
  write: (message) => {
    redis.del("server-log", function (err) {
      if (err) throw err;
      redis.lpush("server-log", message, function (err) {
        if (err) throw err;
        redis.ltrim("server-log", 0, 4999);
      });
    });
  },
};

app.use(morgan("combined", { stream }));

// routes
app.use("/auth", authRoutes);
app.use("/wallets", walletRoutes);
app.use("/payments", paymentsRoutes);
app.use("/endpoint", endpointTestRoute);

app.listen(PORT, () => console.log(`Auth server running on port: ${PORT}`));
