require("dotenv").config();

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["openweathermap.org"],
  },
  env: {
    NEXT_API_URL: process.env.NEXT_API_URL,
    NEXT_API_KEY: process.env.NEXT_API_KEY,
    REACT_APP_PAYPAL_CLIENTID: process.env.REACT_APP_PAYPAL_CLIENTID
  },

};
