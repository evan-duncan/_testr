const auth = require('./auth');
const clients = require('./clients');
const discovery = require('./discovery');
const errors = require('./errors');
const healthz = require('./healthz');
const paymentPlans = require('./paymentPlans');
const users = require('./users');

module.exports = {
  auth,
  clients,
  discovery,
  errors,
  healthz,
  paymentPlans,
  users,
};

