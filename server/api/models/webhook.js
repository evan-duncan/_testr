const Model = require('./model');

class Webhook extends Model {
  static get tableName() {
    return 'webhooks';
  }
}

module.exports = Webhook;

