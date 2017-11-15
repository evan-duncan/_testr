const db = require('../db');
const { Model } = require('objection');

const mysqlDate = require('../../lib/mysqlDate');

Model.knex(db);

class AbstractModel extends Model {
  $beforeInsert() {
    const date = mysqlDate(new Date().toISOString());
    this.created_at = date;
    this.updated_at = date;
  }

  $beforeUpdate() {
    this.updated_at = mysqlDate(new Date().toISOString());
  }
}

module.exports = AbstractModel;

