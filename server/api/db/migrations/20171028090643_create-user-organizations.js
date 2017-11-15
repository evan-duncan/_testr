
exports.up = function (knex, Promise) {
  return knex.schema.createTable('user_organizations', (t) => {
    t.integer('user_id').unsigned().notNullable();
    t.integer('organization_id').unsigned().notNullable();
    t.timestamps();

    t.foreign('user_id').references('users.id').onUpdate('NO ACTION').onDelete('CASCADE');
    t.foreign('organization_id').references('organizations.id').onUpdate('NO ACTION').onDelete('CASCADE');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('user_organizations');
};

