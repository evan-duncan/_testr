const Queue = require('bull');

const redis = {
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
};

module.exports = {
  Queue,
  redis,
};

