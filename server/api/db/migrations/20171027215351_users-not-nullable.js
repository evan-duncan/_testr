
exports.up = function (knex, Promise) {
  return knex.schema.alterTable('users', (t) => {
    t.string('username', 100).notNullable().alter();
    t.binary('password', 60).notNullable().alter();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.alterTable('users', (t) => {
    t.string('username', 100).nullable().alter();
    t.binary('password', 60).nullable().alter();
  });
};

