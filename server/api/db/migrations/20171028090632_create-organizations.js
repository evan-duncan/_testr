
exports.up = function (knex, Promise) {
  return knex.schema.createTable('organizations', (t) => {
    t.increments();
    t.string('name').notNullable().unique();
    t.string('display_name');
    t.string('email', 100).unique();
    t.string('description');
    t.string('url', 512).unique();
    t.string('location', 512);
    t.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('organizations');
};

