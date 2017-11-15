
/**
 * Format a date or datetime string into a MySQL datetime
 * @param {String|Date} date
 * @return {String} 'YYYY-MM-DD HH:mm:ss'
 */
module.exports = function mysqlDate(date) {
  const str = (date instanceof Date) ? date.toISOString() : new Date(date).toISOString();
  return str.slice(0, 19).replace('T', ' ');
};

