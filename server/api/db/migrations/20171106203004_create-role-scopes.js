
exports.up = function(knex, Promise) {
    return knex.schema.createTable('role_scopes', t => {
        t.integer('role_id').unsigned().notNullable();
        t.integer('scope_id').unsigned().notNullable();
        t.timestamps();

        t.foreign('role_id').references('roles.id').onDelete('CASCADE');
        t.foreign('scope_id').references('scopes.id').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('role_scopes');
};

