exports.seed = function seed(knex) {
  // Deletes ALL existing entries
  return knex('scopes').del()
    .then(() =>
      // Inserts seed entries
      knex('scopes').insert([
        { name: '*', description: 'Admin scope' },
        { name: 'users', description: 'Users scope' },
        { name: 'users:read', description: 'Users read scope' },
        { name: 'users:write', description: 'Users write scope' },
        { name: 'tests', description: 'Tests scope' },
        { name: 'tests:read', description: 'Tests read scope' },
        { name: 'tests:write', description: 'Tests write scope' },
      ]));
};
