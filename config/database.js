const mongoose = require('mongoose');
const { SecretClient } = require("@azure/keyvault-secrets");
const { DefaultAzureCredential } = require("@azure/identity");
const credential = new DefaultAzureCredential();
const url = "https://StudioTimeKeyVault.vault.azure.net";
const client = new SecretClient(url, credential);

// (async function () {
  // const databaseURL = await client.getSecret('DATABASE-URL');
// mongoose.connect(databaseURL);
// })();

mongoose.connect(process.env.DATABASE_URL);

// shortcut var to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});