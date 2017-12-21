const { Test } = require('../models');
const auth = require('../middlewares/auth');

module.exports = (router) => {
  router.get('/tests', auth.bearer, index);
  router.post('/tests', auth.bearer, create);
  router.get('/tests/:id', auth.bearer, show);
  router.put('/tests/:id', auth.bearer, update);
  router.delete('/tests/:id', auth.bearer, destroy);
}

function index(req, res, next) {
  Test
    .query()
}

function create(req, res) {
}

function show(req, res) {
}

function update(req, res) {
}

function destroy(req, res) {
}
