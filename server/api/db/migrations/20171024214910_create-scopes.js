
exports.up = function (knex, Promise) {
  return knex.schema.createTable('scopes', (t) => {
    t.increments();
    t.string('name', 45).notNullable().unique();
    t.text('description');
    t.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('scopes');
};

