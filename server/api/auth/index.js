const passport = require('passport');

// load the auth strategies
require('./local');
require('./basic');
require('./bearer');
require('./oauth2ClientPassword');

module.exports = passport;

