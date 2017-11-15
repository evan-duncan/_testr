const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const cookies = require('cookie-parser');
const auth = require('./auth');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const isAuthed = auth.authenticate('bearer', { session: false });
const controllers = require('./controllers');

router.use(cookies());
router.use(session({
    store: new RedisStore({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_POST,
    }),
    secret: process.env.SECURITY_KEY,
    resave: false,
    saveUninitialized: false,
}));
router.use(auth.initialize());
router.use(auth.session());

router.get('/healthz', controllers.healthz.index);
router.post('/oauth/token', controllers.auth.token);
router.get('/oauth/authorize', controllers.auth.authorize);
router.post('/oauth/authorize/decision', controllers.auth.decision);
router.get('/oauth/login', controllers.auth.login);
router.post('/oauth/login', auth.authenticate('local', { successReturnToOrRedirect: '/api/oauth/authorize', failureRedirect: '/api/oauth/login' }));

router.post('/users', controllers.users.create);
router.get('/payment_plans', controllers.paymentPlans.index);
router.get('/payment_plans/:id', controllers.paymentPlans.show);

/**
 * All routes that need to be behind auth
 */
router.get('/users/me', isAuthed, controllers.users.show);
router.get('/clients', isAuthed, controllers.clients.index);
router.post('/clients', isAuthed, controllers.clients.create);
router.put('/clients/:id_or_name', isAuthed, controllers.clients.update);
router.delete('/clients/:id_or_name', isAuthed, controllers.clients.destroy);

router.use(controllers.errors.internalServerError);
router.use(controllers.errors.notFound);
module.exports = router;

