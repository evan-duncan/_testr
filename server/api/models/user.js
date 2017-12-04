const Model = require('./model');
const {
  hash,
  isValid,
} = require('../../lib/password');

class User extends Model {
  static get PASSWORD_CONFIRMATION_ERROR() {
    return 'Password and confirmation password do not match.';
  }

  static get tableName() {
    return 'users';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['email', 'password'],
      properties: {
        id: { type: 'integer' },
        password: { type: 'string', minLength: 6, maxLength: 60 },
        email: { type: ['string'], maxLength: 255 },
        first_name: { type: ['string', 'null'], maxLength: 100 },
        middle_name: { type: ['string', 'null'], maxLength: 100 },
        last_name: { type: ['string', 'null'], maxLength: 100 },
      },
    };
  }

  static get relationshipMappings() {
    const Role = require('./role');
    const PaymentSubscription = require('./payment/subscription');
    const Token = require('./token');
    return {
      roles: {
        relation: Model.ManyToManyRelation,
        modelClass: Role,
        join: {
          from: 'users.id',
          through: {
            from: 'user_roles.user_id',
            to: 'user_roles.role_id',
          },
          to: 'roles.id',
        },
      },
      subscriptions: {
        relation: Model.ManyToManyRelation,
        modelClass: PaymentSubscription,
        join: {
          from: 'users.id',
          through: {
            from: 'payment_subscribables.user_id',
            to: 'payment_subscribables.payment_subscription_id',
          },
          to: 'payment_subscriptions.id',
        },
      },
      tokens: {
        relation: Model.HasManyRelation,
        modelClass: Token,
        join: {
          from: 'users.id',
          to: 'tokens.user_id',
        },
      },
    };
  }

  static confirmPasswordAndCreate({
    name, password, email,
  }) {
    const parts = name.split(' ');
    let first_name, middle_name, last_name;
    if (parts.length > 2) {
      [first_name, middle_name, last_name] = parts;
    } else {
      [first_name, last_name] = parts;
    }
    return User.query().insert({ password, email, first_name, middle_name, last_name });
  }

  async $beforeInsert() {
    this.password = await hash(this.password);
  }

  $formatJson(json) {
    json = super.$formatJson(json);
    delete json.password;
    return json;
  }

  async hasValidPassword(givenPassword) {
    try {
      return await isValid(this.password, givenPassword);
    } catch (err) {
      return false;
    }
  }
}

module.exports = User;

