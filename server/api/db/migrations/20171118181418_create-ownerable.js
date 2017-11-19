
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('owners', (t) => {
      t.increments();
      t.integer('user_id').unsigned();
      t.integer('organization_id').unsigned();
      t.timestamps();

      t.foreign('user_id').references('users.id').onDelete('CASCADE');
      t.foreign('organization_id').references('organizations.id').onDelete('CASCADE');
    })
    .raw(`
      ALTER TABLE owners
      ADD CONSTRAINT exactly_one_owner CHECK (
        (user_id IS NOT NULL AND organization_id IS NULL) OR
        (user_id IS NULL AND organization_id IS NOT NULL)
      )
    `)
    .alterTable('tests', (t) => {
      t.integer('owner_id').unsigned();
      t.foreign('owner_id').references('owners.id').onDelete('CASCADE');
    })
    .alterTable('steps', (t) => {
      t.integer('owner_id').unsigned();
      t.foreign('owner_id').references('owners.id').onDelete('CASCADE');
    })
    .alterTable('plans', (t) => {
      t.integer('owner_id').unsigned();
      t.foreign('owner_id').references('owners.id').onDelete('CASCADE');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .alterTable('plans', (t) => {
      t.dropColumn('owner_id');
      t.dropIndex('owner_id');
    })
    .alterTable('steps', (t) => {
      t.dropColumn('owner_id');
      t.dropIndex('owner_id');
    })
    .alterTable('tests', (t) => {
      t.dropColumn('owner_id');
      t.dropIndex('owner_id');
    })
    .dropTable('owners');
};

