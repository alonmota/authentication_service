const mongoose = require('mongoose');
const util = require('util');

// config should be imported before importing any other file
const config = require('config');

const app = require('./server/express');

// connect to mongo db
mongoose.connect(config.get('DATABASE_URI'), { useNewUrlParser: true });
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.get('DATABASE_URI')}`);
});

// module.parent check is required to support mocha watch
if (!module.parent) {
  // listen on port port
  app.listen(config.get('PORT'), () => {
    console.info(`server started on port ${config.get('PORT')} (${config.get("ENV")})`); // eslint-disable-line no-console
  });
}

module.exports = app;
