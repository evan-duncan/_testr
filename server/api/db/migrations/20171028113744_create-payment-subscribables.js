
exports.up = function (knex, Promise) {
  return knex.schema
    .createTable('payment_subscribables', (t) => {
      t.increments();
      t.integer('payment_subscription_id').unsigned().notNullable();
      t.integer('user_id').unsigned();
      t.integer('organization_id').unsigned();
      t.timestamps();

      t.foreign('payment_subscription_id').references('payment_subscriptions.id').onDelete('CASCADE').onUpdate('NO ACTION');
      t.foreign('user_id').references('users.id').onDelete('CASCADE').onUpdate('NO ACTION');
      t.foreign('organization_id').references('organizations.id').onDelete('CASCADE').onUpdate('NO ACTION');
    })
    .raw(`
            ALTER TABLE payment_subscribables
                ADD CONSTRAINT exactly_one_payment_subscribable CHECK(
                    (user_id IS NOT NULL AND organization_id IS NULL) OR
                    (user_id IS NULL AND organization_id IS NOT NULL)
                )
        `);
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('payment_subscribables');
};

