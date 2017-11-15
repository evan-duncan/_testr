
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (t) => {
    t.increments();
    t.string('username', 100);
    t.binary('password', 60);
    t.string('email');
    t.string('first_name', 100);
    t.string('middle_name', 100);
    t.string('last_name', 100);
    t.timestamps();

    t.unique('username');
    t.unique('email');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');
};
