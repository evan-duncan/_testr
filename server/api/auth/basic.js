const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const { Client } = require('../../api/models');

passport.use(new BasicStrategy((async (id, secret, done) => {
  try {
    const client = await Client
      .query()
      .where('client_id', '=', id)
      .first();

    if (!client) return done(null, false);
    if (await !client.hasValidSecret(secret)) return done(null, false);
    return done(null, client);
  } catch (err) {
    done(err);
  }
})));

