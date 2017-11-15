
exports.up = function (knex, Promise) {
  return knex.schema.createTable('roles', (t) => {
    t.increments();
    t.string('type', 45).notNullable().unique();
    t.text('description');
    t.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('roles');
};
