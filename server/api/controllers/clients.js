/* eslint-disable */
const auth = require('../middlewares/auth');

module.exports = (router) => {
  router.get('/clients', auth.bearer, index);
  router.post('/clients', auth.bearer, create);
  router.get('/clients/:id_or_name', auth.bearer, show);
  router.put('/clients/:id_or_name', auth.bearer, update);
  router.delete('/clients/:id_or_name', auth.bearer, destroy);
};

function index(req, res, next) {
}

function show(req, res, next) {
}

function create(req, res, next) {
}

function update(req, res, next) {
}

function destroy(req, res, next) {
}
