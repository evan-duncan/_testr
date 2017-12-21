const HttpStatus = require('../../lib/httpstatus');
const models = require('../models');
const envelope = require('../../lib/envelope');
const pkg = require('../../package.json');

module.exports = (router) => {
  router.get('/healthz', index);
};

/**
   * API Health Check
   */
function index(req, res, next) {
  models.Health.isHealthy()
    .then((result) => {
      const status = HttpStatus.OK;
      const data = envelope(status, 'OK', {
        is_healthy: !!result.is_healthy,
        uptime: process.uptime(),
        version: pkg.version,
      });
      res.status(status).json(data);
    })
    .catch(next);
}
