require('dotenv').config();
require('./config/database');

const Studio = require('./models/studio');

// For better organization, the seed data is being stored in a separate data.js module
const data = require('./data');

const p1 = Studio.deleteMany({});

Promise.all([p1])
  .then(function(results) {
    // results will be an array
    // of two result objects
    console.log(results);
    return Studio.create(data.studios);
  })