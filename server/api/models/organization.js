const Model = require('./model');

class Organization extends Model {
  static get tableName() {
    return 'organizations';
  }

  static get relationshipMappings() {
    const PaymentSubscription = require('./payment/subscription');
    return {
      subscriptions: {
        relation: Model.ManyToManyRelation,
        modelClass: PaymentSubscription,
        join: {
          from: 'organizations.id',
          through: {
            from: 'payment_subscribables.organization_id',
            to: 'payment_subscribables.payment_subscription_id',
          },
          to: 'payment_subscriptions.id',
        },
      },
    };
  }
}

module.exports = Organization;

