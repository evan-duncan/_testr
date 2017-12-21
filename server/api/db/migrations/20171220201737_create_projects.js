
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', (t) => {
        t.increments();
        t.integer('owner_id').unsigned();
        t.string('name').notNullable();
        t.timestamps();

        t.foreign('owner_id').references('owners.id').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('projects');
};
