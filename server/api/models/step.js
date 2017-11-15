const Model = require('./model');

class Step extends Model {
  static get tableName() {
    return 'steps';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'name',
        'expected',
        'actual',
      ],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', maxLength: 255 },
        expected: { type: 'string' },
        actual: { type: 'string' },
      },
    };
  }

  static get relationshipMappings() {
    const Test = require('./test');
    return {
      tests: {
        relation: Model.ManyToManyRelation,
        modelClass: Test,
        join: {
          from: 'steps.id',
          through: {
            from: 'test_steps.step_id',
            to: 'test_steps.test_id',
          },
          to: 'tests.id',
        },
      },
    };
  }
}

module.exports = Step;

