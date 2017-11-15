const Model = require('../model');

class PaymentPlan extends Model {
  static get tableName() {
    return 'payment_plans';
  }
}

module.exports = PaymentPlan;

