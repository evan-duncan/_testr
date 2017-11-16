const Model = require('./model');

class Role extends Model {
  static get tableName() {
    return 'roles';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['type'],
      properties: {
        id: { type: 'integer' },
        type: { type: 'string', minLength: 1, maxLength: 45 },
        description: { type: ['string', 'null'], default: null },
      },
    };
  }

  static get relationshipMappings() {
    const User = require('./user');
    const Scope = require('./scope');
    return {
      scopes: {
        relation: Model.ManyToManyRelation,
        modelClass: Scope,
        join: {
          from: 'roles.id',
          through: {
            from: 'role_scopes.role_id',
            to: 'role_scopes.scope_id',
          },
          to: 'scopes.id',
        },
      },
      users: {
        relation: Model.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'roles.id',
          through: {
            from: 'user_roles.role_id',
            to: 'user_roles.user_id',
          },
          to: 'users.id',
        },
      },
    };
  }
}

module.exports = Role;

