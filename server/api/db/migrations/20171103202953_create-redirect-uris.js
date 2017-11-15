
exports.up = function (knex, Promise) {
  return knex.schema.createTable('redirect_uris', (t) => {
    t.increments();
    t.integer('client_id').unsigned().notNullable();
    t.string('uri');
    t.timestamps();

    t.foreign('client_id').references('clients.id').onDelete('CASCADE');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('redirect_uris');
};
