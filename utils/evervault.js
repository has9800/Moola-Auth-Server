const Evervault = require("@evervault/sdk");

const evervault = new Evervault(
  process.env.EVERVAULT_APP_ID,
  process.env.EVERVAULT_API_KEY
);

module.exports = evervault;

// start outbound relay using - evervault.enableOutboundRelay();
