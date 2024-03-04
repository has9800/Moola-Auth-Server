const { Redis } = require("@upstash/redis");

const redis = new Redis({
  url: "https://hopeful-meerkat-32676.upstash.io",
  token:
    "AX-kASQgMjUzZjkxNDEtYWIzZi00NDY0LTg2MmYtOWMxZDlhYmNkYzAyOTllMzk3MjI3YzRhNDBiZjhjMWNiNWZlMmZmYmRmZDg=",
});

module.exports = { redis };
