
exports.up = function (knex, Promise) {
  return knex.schema.createTable('clients', (t) => {
    t.increments();
    t.string('name', 45).unique();
    t.string('client_id', 45).notNullable().unique();
    t.binary('client_secret', 60).notNullable();
    t.boolean('is_trusted').defaultTo(false);
    t.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('clients');
};

