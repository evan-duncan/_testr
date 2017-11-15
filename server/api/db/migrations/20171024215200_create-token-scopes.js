
exports.up = function (knex, Promise) {
  return knex.schema.createTable('token_scopes', (t) => {
    t.integer('token_id').unsigned().notNullable();
    t.integer('scope_id').unsigned().notNullable();
    t.timestamps();

    t.foreign('token_id').references('tokens.id').onDelete('CASCADE').onUpdate('NO ACTION');
    t.foreign('scope_id').references('scopes.id').onDelete('CASCADE').onUpdate('NO ACTION');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('token_scopes');
};

