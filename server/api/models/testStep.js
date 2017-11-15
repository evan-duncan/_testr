const Model = require('./model');

class TestStep extends Model {
  static get tableName() {
    return 'test_steps';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'position',
      ],
      properties: {
        position: { type: 'integer' },
      },
    };
  }
}

module.exports = TestStep;

