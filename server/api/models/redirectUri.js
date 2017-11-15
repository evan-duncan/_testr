const Model = require('./model');

class RedirectUri extends Model {
  static get tableName() {
    return 'redirect_uris';
  }

  static get relationshipMappings() {
    const Client = require('./client');
    return {
      client: {
        relation: Model.BelongsToOneRelation,
        modelClass: Client,
        join: {
          from: 'redirect_uris.client_id',
          to: 'clients.id',
        },
      },
    };
  }
}

module.exports = RedirectUri;

