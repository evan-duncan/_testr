
exports.up = function (knex, Promise) {
  return knex.schema.createTable('tests', (t) => {
    t.increments();
    t.string('title').notNullable().index();
    t.string('description');
    t.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tests');
};

