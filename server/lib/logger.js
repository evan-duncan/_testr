const pino = require('pino')();
const logger = require('express-pino-logger');

module.exports = {
  middleware: logger({
    logger: pino,
  }),
  logger: pino,
};

