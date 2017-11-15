
exports.up = function (knex, Promise) {
  return knex.schema.createTable('steps', (t) => {
    t.increments();
    t.string('name').notNullable().index();
    t.string('expected').notNullable();
    t.string('actual').notNullable();
    t.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('steps');
};

