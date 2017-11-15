
exports.up = function (knex, Promise) {
  return knex.schema.createTable('tokens', (t) => {
    t.increments();
    t.string('value', 64).notNullable().unique();
    t.integer('user_id').unsigned().notNullable();
    t.integer('client_id').unsigned().notNullable();
    t.timestamps();

    t.foreign('user_id').references('users.id').onDelete('CASCADE').onUpdate('NO ACTION');
    t.foreign('client_id').references('clients.id').onDelete('CASCADE').onUpdate('NO ACTION');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tokens');
};

