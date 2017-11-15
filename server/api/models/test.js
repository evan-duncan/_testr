const Model = require('./model');

class Test extends Model {
  static get tableName() {
    return 'tests';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'title',
      ],
      properties: {
        id: { type: 'integer' },
        title: { type: 'string', maxLength: 255 },
        description: { type: 'string', maxLength: 255 },
      },
    };
  }

  static get relationshipMappings() {
    const Step = require('./step');
    return {
      steps: {
        relation: Model.ManyToManyRelation,
        modelClass: Step,
        join: {
          from: 'tests.id',
          through: {
            from: 'test_steps.test_id',
            to: 'test_steps.step_id',
          },
          to: 'steaps.id',
        },
      },
    };
  }
}

module.exports = Test;

