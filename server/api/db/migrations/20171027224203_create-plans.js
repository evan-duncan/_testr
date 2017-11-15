
exports.up = function (knex, Promise) {
  return knex.schema.createTable('plans', (t) => {
    t.increments();
    t.string('name').notNullable().index();
    t.string('description');
    t.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('plans');
};

