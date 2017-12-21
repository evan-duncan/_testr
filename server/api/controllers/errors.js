const HttpStatus = require('../../lib/httpstatus');
const envelope = require('../../lib/envelope');

module.exports = (router) => {
  router.use(internalServerError);
  router.use(notFound);
};

/**
 * Error handler middleware to generically respond from next(Error) calls
 */
function internalServerError(err, req, res, next) {
  if (!err) {
    return next();
  }
  const status = err.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
  let msg = err.sqlMessage || err.message || 'There was a problem.';
  let data;

  try {
    data = JSON.parse(msg);
    msg = 'An error occurred';
  } catch (err) {}

  return res.status(status).json(envelope(status, msg, data));
}

/**
 * If nothing else was hit, 404
 */
function notFound(req, res) {
  const status = HttpStatus.NOT_FOUND;
  res.status(status).json(envelope(status, `${req.path} was not found.`));
}
