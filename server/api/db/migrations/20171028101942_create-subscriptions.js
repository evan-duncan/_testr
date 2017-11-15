
exports.up = function (knex, Promise) {
  return knex.schema.createTable('payment_subscriptions', (t) => {
    t.increments();
    t.string('customer_id').notNullable().unique();
    t.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('payment_subscriptions');
};

