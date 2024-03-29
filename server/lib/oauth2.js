const oauth2orize = require('oauth2orize');

const server = oauth2orize.createServer();
const isPast = require('date-fns/is_past');
const differenceInSeconds = require('date-fns/difference_in_seconds');
const { Client, Token, User } = require('../api/models');

/**
 * Resource owner password grant flow
 */
server.exchange(oauth2orize.exchange.password(async (client, username, password, scope, done) => {
  try {
    if (!client.is_trusted) {
      return done(null, false);
    }

    const user = await User.query().where('email', '=', username).first();
    if (!user) {
      return done(null, false);
    }

    const hasValidPassword = await user.hasValidPassword(password);
    if (!hasValidPassword) {
      return done(null, false);
    }

    const token = await Token.create({ client, user, scope });
    const refresh = await Token.create({
      client, user, scope, type: 'refresh',
    });
    const expiresIn = differenceInSeconds(token.expires_at, token.created_at);
    return done(null, token.value, refresh.value, { expires_in: expiresIn });
  } catch (err) {
    return done(err);
  }
}));


/**
 * Refresh token grant
 */
server.exchange(oauth2orize.exchange.refreshToken(async (client, refreshToken, scope, done) => {
  try {
    const token = await Token
      .query()
      .eager('user')
      .where('value', '=', refreshToken)
      .andWhere('type', '=', 'refresh')
      .first();
    if (!token) {
      return done(null, false);
    }

    if (token.expires_at && isPast(token.expires_at)) {
      await Token.query().delete().where('value', '=', refreshToken);
      return done(null, false);
    }

    const access = await Token.create({ client, user: token.user, scope });
    const refresh = await Token.create({
      client, user: token.user, scope, type: 'refresh',
    });
    await Token.query().delete().where('value', '=', refreshToken);
    const expiresIn = differenceInSeconds(access.expires_at, refresh.created_at);
    return done(null, access.value, refresh.value, { expires_in: expiresIn });
  } catch (err) {
    return done(err);
  }
}));

server.serializeClient((client, done) => done(null, client.client_id));

server.deserializeClient((id, done) =>
  Client.query()
    .where('client_id', '=', id)
    .first()
    .then(client => done(null, client))
    .catch(done));

module.exports = server;

