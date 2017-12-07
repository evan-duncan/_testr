const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Client } = require('../../api/models');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false,
    passReqToCallback: true,
  },
  async function (req, username, password, done) {
    /**
     * All of the heavy lifting is going to be done by the OAuth2 server.
     * Our auth server has a password grant flow implemented that will
     * validate that the credentials belong to a user, and the password is legit.
     * From there we will validate the client is trusted, and give these trusted
     * clients full access within the scope of the user. The only clients
     * that are considered trusted are clients that we have implemented.
     */
    req.body.grant_type = 'password';
    req.body.username = username;
    req.body.scope = '*';
    const client = await Client.query().where('client_id', '=', process.env.APP_CLIENT_ID).first();
    return done(null, client);
  }
));
