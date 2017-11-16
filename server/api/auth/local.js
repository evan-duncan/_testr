const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../../api/models');

passport.use(new LocalStrategy((async (username, password, done) => {
  const user = await User
    .query()
    .where('username', '=', username)
    .first();

  if (!user) {
    done(null, false, { message: 'User not found' });
  }

  const hasValidPassword = await user.hasValidPassword(password);
  if (!hasValidPassword) {
    done(null, false, { message: 'Invalid username or password' });
  }

  done(null, user);
})));


passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.query()
    .findById(id)
    .then(user => done(null, user))
    .catch(done);
});

