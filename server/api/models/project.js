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

    static async create({ name, user }) {
        const owner_id = user.id; // TODO: this needs to account for orgs
        const project = await Project.query().insert({ name });
        await project
            .$relatedQuery('owner')
            .insert({ user_id: owner_id });
        
        return project;
    }
}

module.exports = Project;
