const Model = require('./model');

class Project extends Model {
    static get tableName() {
        return 'projects';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name'],
            properties: {
                id: { type: 'integer' },
                owner_id: { type: 'integer' },
                name: { type: 'string', maxLength: 255 },
            },
        };
    }

    static get relationMappings() {
        const Owner = require('./owner');
        return {
            owner: {
                relation: Model.BelongsToOneRelation,
                modelClass: Owner,
                join: {
                    from: 'projects.owner_id',
                    to: 'owners.id',
                },
            },
        };
    }
}
