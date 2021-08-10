module.exports = {
  reactStrictMode: true,
  env: {
    // JWT_SIGNING_PRIVATE_KEY: "kent-bookit",
    NEXTAUTH_URL: "",
    DB_LOCAL_URI: "mongodb://localhost:27017/my_shop",
    MONGO_URI:
      "mongodb+srv://root:qiang412@cluster0.b2loh.mongodb.net/myShop?retryWrites=true&w=majority",
    CLOUND_NAME: "kent-clound",
    CLOUD_API_KEY: "887921563917991",
    CLOUD_API_SECRET: "EqdRD5G8qBu_64AyfSuCIVP8gfc",

    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_POST: 2525,
    SMTP_USER: "b7c5406b2623f9",
    SMTP_PASS: "1efb261d0026b9",
    SMTP_FROM_NAME: "Kent",
    SMTP_FROM_EMAIL: "no-reply@gmail.com",

    STRIPE_PUBLISH_KEY: "",
    STRIPE_SECRET_KEY: "",
    STRIPE_WEBHOOK_SECRET: "1",
  },
};
