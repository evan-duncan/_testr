const Model = require('./model');

class Plan extends Model {
  static get tableName() {
    return 'plans';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'name',
      ],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', maxLength: 255 },
        description: { type: 'string' },
      },
    };
  }

  static get relationshipMappings() {
    const User = require('./user');
    const Test = require('./test');
    return {
      created_by: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'plans.created_by_id',
          to: 'users.id',
        },
      },
      tests: {
        relation: Model.ManyToManyRelation,
        modelClass: Test,
        join: {
          from: 'plans.id',
          through: {
            from: 'plan_tests.plan_id',
            to: 'plan_tests.test_id',
          },
          to: 'tests.id',
        },
      },
    };
  }
}

module.exports = Plan;

