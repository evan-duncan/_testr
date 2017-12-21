const HttpStatus = require('../../lib/httpstatus');
const { User } = require('../models');
const envelope = require('../../lib/envelope');
const auth = require('../middlewares/auth');

module.exports = (router) => {
  router.post('/users', create);
  router.get('/users', auth.bearer, index);
  router.get('/users/me', auth.bearer, show);
};

function create(req, res, next) {
  User.confirmPasswordAndCreate(req.body)
    .then((user) => {
      const status = HttpStatus.OK;
      const data = envelope(status, 'OK', user.toJSON());
      res.status(status).json(data);
    })
    .catch(next);
}

function show(req, res) {
  const status = HttpStatus.OK;
  const data = envelope(status, 'OK', { ...req.user.toJSON(), ...req.authInfo });
  res.json(data);
}

function index(req, res) {
  res.status(HttpStatus.NOT_IMPLEMENTED);
}
