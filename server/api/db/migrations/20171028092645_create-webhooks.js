
exports.up = function (knex, Promise) {
  return knex.schema.createTable('webhooks', (t) => {
    t.increments();
    t.integer('organization_id').unsigned().notNullable();
    t.string('url', 512).notNullable().unique();
    t.enu('content_type', ['application/json', 'application/x-www-form-urlencoded']).notNullable().defaultTo('application/json');
    t.string('secret', 512).notNullable();
    t.boolean('is_active').defaultTo(true).notNullable();
    t.timestamps();

    t.foreign('organization_id').references('organizations.id').onUpdate('NO ACTION').onDelete('CASCADE');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('webhooks');
};

