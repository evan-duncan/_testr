const knex = require('knex');

let connectionInfo;
if (process.env.DB_CONNECTION_STRING) {
  connectionInfo = process.env.DB_CONNECTION_STRING;
} else {
  connectionInfo = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };
}

module.exports = knex({
  client: process.env.DB_DRIVER,
  connection: connectionInfo,
  debug: process.env.DEBUG || process.env.NODE_ENV !== 'production',
});
