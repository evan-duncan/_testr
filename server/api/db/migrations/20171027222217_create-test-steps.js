
exports.up = function (knex, Promise) {
  return knex.schema.createTable('test_steps', (t) => {
    t.integer('test_id').unsigned().notNullable();
    t.integer('step_id').unsigned().notNullable();
    t.integer('position').notNullable();
    t.timestamps();

    t.foreign('test_id').references('tests.id').onDelete('CASCADE').onUpdate('NO ACTION');
    t.foreign('step_id').references('steps.id').onDelete('CASCADE').onUpdate('NO ACTION');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('test_steps');
};

