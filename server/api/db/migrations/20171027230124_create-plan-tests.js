
exports.up = function (knex, Promise) {
  return knex.schema.createTable('plan_tests', (t) => {
    t.integer('plan_id').unsigned().notNullable();
    t.integer('test_id').unsigned().notNullable();
    t.timestamps();

    t.foreign('plan_id').references('plans.id').onDelete('CASCADE').onUpdate('NO ACTION');
    t.foreign('test_id').references('tests.id').onDelete('CASCADE').onUpdate('NO ACTION');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('plan_tests');
};

