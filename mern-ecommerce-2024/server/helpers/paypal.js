const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AbCdEfGhIjKlMnOpQrStUvWxYz1234567890",
  client_secret: "1234567890aBcDeFgHiJkLmNoPqRsTuVwXyZ",
});

module.exports = paypal;
