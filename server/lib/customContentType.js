
const JSON_CONTENT_TYPE = 'application/vnd.gethelp+json';
module.exports.CONTENT_TYPE = JSON_CONTENT_TYPE;

module.exports = function customContentType(req, res, next) {
  res.header('Accept', JSON_CONTENT_TYPE);
  next();
};

