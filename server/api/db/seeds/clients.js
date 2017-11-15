
exports.seed = function seed(knex) {
  return knex('clients').where({
    client_id: process.env.APP_CLIENT_ID,
  })
    .select('id')
    .then((c) => {
      if (c.length) {
        return false;
      }

      return knex('clients').insert([
        {
          name: 'Default client',
          client_id: process.env.APP_CLIENT_ID,
          client_secret: process.env.APP_CLIENT_SECRET,
          is_trusted: true,
        },
      ]);
    });
};
