const passport = require('passport');
const ClientPasswordStrategy = require('passport-oauth2-client-password');
const { Client } = require('../../api/models');

passport.use(new ClientPasswordStrategy((async (id, secret, done) => {
  try {
    const client = await Client
      .query()
      .where('client_id', '=', id)
      .first();

    if (!client) return done(null, false);
    if (await !client.hasValidSecret(secret)) return done(null, false);
    return done(null, client);
  } catch (err) {
    return done(err);
  }
})));
