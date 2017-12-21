const HttpStatus = require('../../lib/httpstatus');
const envelope = require('../../lib/envelope');
const { PaymentPlan } = require('../models');

module.exports = (router) => {
  router.get('/payment_plans', index);
  router.get('/payment_plans/:id', show);
};

function index(req, res, next) {
  const { currency, name } = req.query;
  const stmt = PaymentPlan.query();
  if (currency) {
    stmt.where('currency', '=', currency);
  }
  if (name) {
    stmt.where('name', '=', name);
  }
  stmt.then((plans) => {
    const status = HttpStatus.OK;
    const data = envelope(status, 'OK', plans);
    res.status(status).json(data);
  }).catch(next);
}

function show(req, res, next) {
  const { id } = req.params;
  PaymentPlan
    .query()
    .findById(id)
    .then((plan) => {
      const status = HttpStatus.OK;
      const data = envelope(status, 'OK', plan.toJSON());
      res.status(status).json(data);
    })
    .catch(next);
}
