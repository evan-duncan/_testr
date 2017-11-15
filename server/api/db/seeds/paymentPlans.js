const mysqlDate = require('../../../lib/mysqlDate');

exports.seed = function seed(knex) {
  const now = mysqlDate(new Date().toISOString());
  // Deletes ALL existing entries
  return knex('payment_plans').truncate()
    .then(() =>
      // Inserts seed entries
      knex('payment_plans').insert([
        {
          name: 'basic',
          descriptor: 'AppName Basic Monthly',
          amount: 1000,
          currency: 'usd',
          interval: 'month',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'basic',
          descriptor: 'AppName Basic Annual',
          amount: 10000,
          currency: 'usd',
          interval: 'year',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'pro',
          descriptor: 'AppName Pro Monthly',
          amount: 4000,
          currency: 'usd',
          interval: 'month',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'pro',
          descriptor: 'AppName Pro Annual',
          amount: 40000,
          currency: 'usd',
          interval: 'year',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'enterprise',
          descriptor: 'AppName ENT Monthly',
          amount: 10000,
          currency: 'usd',
          interval: 'month',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'enterprise',
          descriptor: 'AppName ENT Annual',
          amount: 100000,
          currency: 'usd',
          interval: 'year',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'basic',
          descriptor: 'AppName Basic Monthly',
          amount: 1000,
          currency: 'cad',
          interval: 'month',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'basic',
          descriptor: 'AppName Basic Annual',
          amount: 10000,
          currency: 'cad',
          interval: 'year',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'pro',
          descriptor: 'AppName Pro Monthly',
          amount: 4000,
          currency: 'cad',
          interval: 'month',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'pro',
          descriptor: 'AppName Pro Annual',
          amount: 40000,
          currency: 'cad',
          interval: 'year',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'enterprise',
          descriptor: 'AppName ENT Monthly',
          amount: 10000,
          currency: 'cad',
          interval: 'month',
          created_at: now,
          updated_at: now,
        },
        {
          name: 'enterprise',
          descriptor: 'AppName ENT Annual',
          amount: 100000,
          currency: 'cad',
          interval: 'year',
          created_at: now,
          updated_at: now,
        },
      ]));
};
