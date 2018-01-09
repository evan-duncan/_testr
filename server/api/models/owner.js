const Model = require('./model');

class Owner extends Model {
  static get tableName() {
    return 'owners';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        user_id: { type: 'integer' },
        organization_id: { type: 'integer' },
      },
    };
  }

  static get relationMappings() {
    const Test = require('./test');
    const Step = require('./step');
    const Plan = require('./plan');
    const Webhook = require('./webhook');
    const Project = require('./project');
    return {
      tests: {
        relation: Model.HasManyRelation,
        modelClass: Test,
        join: {
          from: 'owners.id',
          to: 'tests.owner_id',
        },
      },
      steps: {
        relation: Model.HasManyRelation,
        modelClass: Step,
        join: {
          from: 'owners.id',
          to: 'steps.owner_id',
        },
      },
      plans: {
        relation: Model.HasManyRelation,
        modelClass: Plan,
        join: {
          from: 'owners.id',
          to: 'plans.owner_id',
        },
      },
      webhooks: {
        relation: Model.HasManyRelation,
        modelClass: Webhook,
        join: {
          from: 'owners.id',
          to: 'webhooks.owner_id',
        },
      },
      projects: {
        relation: Model.HasManyRelation,
        modelClass: Project,
        join: {
          from: 'owners.id',
          to: 'projects.owner_id',
        }
      }
    };
  }
}

module.exports = Owner;

