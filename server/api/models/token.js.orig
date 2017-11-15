const objection = require('objection');
const Model = require('./model');
const { generateHash } = require('../../lib/hash');
const mysqlDate = require('../../lib/mysqlDate');
const addMinutes = require('date-fns/add_minutes');

class Token extends Model {
  static get tableName() {
    return 'tokens';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'value',
        'user_id',
        'client_id',
      ],
      properties: {
        id: { type: 'integer' },
        value: { type: 'string', minLength: 1, maxLength: 100 },
        user_id: { type: 'integer' },
        client_id: { type: 'integer' },
      },
    };
  }

  static get relationMappings() {
    const User = require('./user');
    const Client = require('./client');
    const Scope = require('./scope');
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'tokens.user_id',
          to: 'users.id',
        },
      },
      client: {
        relation: Model.BelongsToOneRelation,
        modelClass: Client,
        join: {
          from: 'tokens.client_id',
          to: 'clients.id',
        },
      },
      scopes: {
        relation: Model.ManyToManyRelation,
        modelClass: Scope,
        join: {
          from: 'tokens.id',
          through: {
            from: 'token_scopes.token_id',
            to: 'token_scopes.scope_id',
            extra: ['created_at', 'updated_at'],
          },
          to: 'scopes.id',
        },
      },
    };
  }

  static async create({ client, user, scope = [] }) {
    const Scope = require('./scope');
    const token = await Token
      .query()
      .insert({
        value: generateHash(),
        client_id: client.id,
        user_id: user.id,
      });

    const scopes = await Promise.all(scope.map(name => Scope.query().where('name', '=', name).first()));
    if (scopes.length) {
      scopes.forEach(async (s) => {
        const now = mysqlDate(Date.now());
        await token
          .$relatedQuery('scopes')
          .relate({ id: s.id, created_at: now, updated_at: now });
      });
    }
  }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'value',
                'user_id',
                'client_id',
            ],
            properties: {
                id: { type: 'integer' },
                value: { type: 'string', minLength: 1, maxLength: 100 },
                user_id: { type: 'integer' },
                client_id: { type: 'integer' },
            }
        };
    }

    static get relationMappings() {
        const User = require('./user');
        const Client = require('./client');
        const Scope = require('./scope');
        return {
            client: {
                relation: Model.BelongsToOneRelation,
                modelClass: Client,
                join: {
                    from: 'tokens.client_id',
                    to: 'clients.id',
                },
            },
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'tokens.user_id',
                    to: 'users.id',
                },
            },
            scopes: {
                relation: Model.ManyToManyRelation,
                modelClass: Scope,
                join: {
                    from: 'tokens.id',
                    through: {
                        from: 'token_scopes.token_id',
                        to: 'token_scopes.scope_id',
                        extra: ['created_at', 'updated_at'],
                    },
                    to: 'scopes.id',
                },
            },
        };
    }

    static async create({ client, user, scope=[], type='access' }) {
        const Scope = require('./scope');
        const expires_at = type === 'access' ? addMinutes(new Date(), 20) : null;
        const token = await Token
            .query()
            .insert({
                value: generateHash(),
                client_id: client.id,
                user_id: user.id,
                type,
                expires_at,
            });

        const scopes = await Promise.all(scope.map(name => Scope.query().where('name', '=', name).first()));
        if (scopes.length) {
            scopes.forEach(async function(scope) {
                const now = mysqlDate(Date.now());
                await token
                    .$relatedQuery('scopes')
                    .relate({ id: scope.id, created_at: now, updated_at: now });
            });
        }

        return token;
    }
}

module.exports = Token;

