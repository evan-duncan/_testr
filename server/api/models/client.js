const Model = require('./model');
const { generateHash } = require('../../lib/hash');
const {
  hash,
  isValid,
} = require('../../lib/password');

class Client extends Model {
  static get tableName() {
    return 'clients';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'client_id',
      ],
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', maxLength: 45 },
        client_id: { type: 'string', maxLength: 45 },
        client_secret: { type: 'string', maxLength: 60 },
        is_trusted: { type: 'boolean', default: false },
      },
    };
  }

  static get relationshipMappings() {
    const RedirectUri = require('./redirectUri');
    const Token = require('./token');
    return {
      redirect_uris: {
        relation: Model.HasManyRelation,
        modelClass: RedirectUri,
        join: {
          from: 'clients.id',
          to: 'redirect_uris.client_id',
        },
      },
      tokens: {
        relation: Model.HasManyRelation,
        modelClass: Token,
        join: {
          from: 'clients.id',
          to: 'tokens.client_id',
        },
      },
    };
  }

  $beforeInsert() {
    // When a new client is created, we need to return the secret
    // one, and only one, time for the consumer to capture.
    // After the client secret is exposed it is then
    // hashed with Bcrypt and inserted. We will never be able to
    // unhash the client_secret. If a client_secret is lost,
    // a consumer needs to create new client credentials.
    this.client_secret = hash(generateHash());
  }

  async hasValidSecret(secret) {
    try {
      return await isValid(this.client_secret, secret);
    } catch (err) {
      return false;
    }
  }
}

module.exports = Client;

