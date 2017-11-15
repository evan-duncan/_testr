
module.exports = function envelope(status, message, data) {
  let o;

  if (Array.isArray(data)) {
    o = data;
  } else if (typeof data === 'object') {
    o = Object.assign({}, data);
  }

  return {
    status,
    message,
    data: o,
  };
};

