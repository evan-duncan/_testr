const passport = require('passport');
const BearerStrategy = require('passport-http-bearer');
const { Token, Scope } = require('../../api/models');

passport.use(new BearerStrategy((async (token, done) => {
  try {
    const t = await Token
      .query()
      .eager('[user, scopes]')
      .where('value', '=', token)
      .first();

    if (!t) {
      return done(null, false);
    }

    return done(null, t.user, { scope: t.scopes.map(scope => scope.name).join(Scope.DELIMETER) });
  } catch (err) {
    return done(null, false);
  }
})));

