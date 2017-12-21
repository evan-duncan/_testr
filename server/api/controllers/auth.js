const auth = require('../auth');
const oauth = require('../../lib/oauth2');
const { Client } = require('../models');
const { ensureLoggedIn } = require('connect-ensure-login');
const authMiddleware = require('../middlewares/auth');

module.exports = (router) => {
  router.post('/auth/login', local);
  router.post('/oauth/token', token);
  router.get('/oauth/authorize', authorize);
  router.post('/oauth/authorize/decision', decision);
  router.get('/oauth/login', login);
  router.post('/oauth/login', authMiddleware.local);
};

function login(req, res) {
  res.render('login');
}

const authorize = [
  ensureLoggedIn('/api/oauth/login'),
  oauth.authorize((clientId, redirectUrl, done) => {
    Client.query()
      .where('client_id', '=', clientId)
      .first()
      .then((client) => {
        if (!client) {
          return done(null, false);
        }

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
];

const decision = [
  ensureLoggedIn('/api/oauth/login'),
  oauth.decision(),
];

const token = [
  auth.authenticate(['basic', 'oauth2-client-password'], { session: false }),
  oauth.token(),
  oauth.errorHandler(),
];

const local = [
  auth.authenticate('local', { session: false }),
  oauth.token(),
  oauth.errorHandler(),
];
