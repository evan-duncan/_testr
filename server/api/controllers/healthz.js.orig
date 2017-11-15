const HttpStatus = require('../../lib/httpstatus');
const models = require('../models');
const envelope = require('../../lib/envelope');
const pkg = require('../../package.json');

module.exports = {
  /**
     * API Health Check
     */
  index: function index(req, res, next) {
    models.Health.isHealthy()
      .then((result) => {
        const status = HttpStatus.OK;
        const data = envelope(status, 'OK', {
          is_healthy: !!result.is_healthy,
          uptime: process.uptime(),
        });
        res.status(status).json(data);
      })
      .catch(next);
  },
};

