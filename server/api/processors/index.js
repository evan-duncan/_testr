const path = require('path');
const { Queue, redis } = require('../../lib/queue');

const queues = {
  token: new Queue('Token processing', { redis }),
};

queues.token.process(path.resolve('./token.js'));

