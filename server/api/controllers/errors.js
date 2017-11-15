const HttpStatus = require('../../lib/httpstatus');
const envelope = require('../../lib/envelope');

module.exports = {
  /**
     * Error handler middleware to generically respond from next(Error) calls
     */
  internalServerError: function internalServerError(err, req, res, next) {
    if (!err) {
      return next();
    }
    const status = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
    const msg = err.sqlMessage || err.message || 'There was a problem.';
    return res.status(status).json(envelope(status, msg));
  },
  /**
     * If nothing else was hit, 404
     */
  notFound: function notFound(req, res) {
    const status = HttpStatus.NOT_FOUND;
    res.status(status).json(envelope(status, `${req.path} was not found.`));
  },
};
