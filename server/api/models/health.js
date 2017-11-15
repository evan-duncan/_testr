const Model = require('./model');

class Health extends Model {
  static isHealthy() {
    return Model.raw('SELECT 1 as is_healthy').then(res => res[0][0]);
  }
}

module.exports = Health;

