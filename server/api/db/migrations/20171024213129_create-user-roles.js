
exports.up = function (knex, Promise) {
  return knex.schema.createTable('user_roles', (t) => {
    t.integer('user_id').unsigned().notNullable();
    t.integer('role_id').unsigned().notNullable();
    t.timestamps();

    t.foreign('user_id').references('users.id').onDelete('CASCADE').onUpdate('NO ACTION');
    t.foreign('role_id').references('roles.id').onDelete('CASCADE').onUpdate('NO ACTION');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('user_roles');
};

