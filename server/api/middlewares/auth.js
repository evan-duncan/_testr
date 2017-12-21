const auth = require('../auth');

module.exports.local = auth.authenticate('local', { successReturnToOrRedirect: '/api/oauth/authorize', failureRedirect: '/api/oauth/login' });
module.exports.bearer = auth.authenticate('bearer', { session: false });
