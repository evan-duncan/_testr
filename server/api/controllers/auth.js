const auth = require('../auth');
const oauth = require('../../lib/oauth2');
const { Client } = require('../models');
const { ensureLoggedIn } = require('connect-ensure-login');

module.exports = {
  login: (req, res) => {
    res.render('login');
  },
  authorize: [
    ensureLoggedIn('/api/oauth/login'),
    oauth.authorize((clientId, redirectUrl, done) => {
      Client.query()
        .where('client_id', '=', clientId)
        .first()
        .then((client) => {
          if (!client) {
            return done(null, false);
          }

          // if (client.redirectUrl != redirectUrl) {
          //    return done(null, false);
          // }

          return done(null, client, redirectUrl);
        })
        .catch(done);
    }),
    (req, res) => {
      res.render('authorize', {
        transactionId: req.oauth2.transactionID,
        user: req.user,
        client: req.oauth2.client,
      });
    },
  ],
  decision: [
    ensureLoggedIn('/api/oauth/login'),
    oauth.decision(),
  ],
  token: [
    auth.authenticate(['basic', 'oauth2-client-password'], { session: false }),
    oauth.token(),
    oauth.errorHandler(),
  ],
  local: [
    auth.authenticate('local', { session: false }),
    oauth.token(),
    oauth.errorHandler(),
  ],
};

