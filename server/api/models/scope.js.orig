const Model = require('./model');

class Scope extends Model {
  static get tableName() {
    return 'scopes';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 45 },
        description: { type: ['string', 'null'] },
      },
    };
  }

    static get relationMappings() {
        const Token = require('./token');
        const Role = require('./role');
        return {
            roles: {
                relation: Model.ManyToManyRelation,
                modelClass: Role,
                join: {
                    from: 'scopes.id',
                    through: {
                        from: 'role_scopes.scope_id',
                        to: 'role_scopes.role_id',
                    },
                    to: 'roles.id',
                },
            },
            tokens: {
                relation: Model.ManyToManyRelation,
                modelClass: Token,
                join: {
                    from: 'scopes.id',
                    through: {
                        from: 'token_scopes.scope_id',
                        to: 'token_scopes.token_id',
                        extra: ['created_at', 'updated_at'],
                    },
                    to: 'tokens.id',
                },
            }
        };
    }

  static get DELIMETER() {
    return ' ';
  }
}

module.exports = Scope;

