const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { redis } = require("./redis/redis");
const PORT = process.env.PORT || 8001;

const authRoutes = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// server logging
const stream = {
  write: (message) => {
    redis.set("server-log", message);
  },
};

app.use(morgan("combined", { stream }));

// routes
app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Auth server running on port: ${PORT}`));
