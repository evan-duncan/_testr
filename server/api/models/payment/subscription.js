const Model = require('../model');

class Subscription extends Model {
  static get tableName() {
    return 'subscriptions';
  }
}

module.exports = Subscription;

