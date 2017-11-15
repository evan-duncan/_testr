const bcrypt = require('bcrypt');
const _ = require('lodash');

const SALT_ROUNDS = 12;

/**
 * Take plain text and hash and salt it with Bcrpyt
 * @async
 * @private
 * @return {Promise.<Buffer, Error>}
 */
function hash(plainTextPassword) {
  return bcrypt.hash(plainTextPassword, SALT_ROUNDS);
}

/**
 * Check if a hashed password and a plain text password are a match.
 * @async
 * @private
 * @note The hashed password cannot be unhashed, only a comparison is being made
 * @param {Buffer|String} hashedPassword
 * @param {String} givenPassword
 * @return {Promise.<Boolean>}
 */
async function isValid(hashedPassword, givenPassword) {
  try {
    const isBuffer = _.isBuffer(hashedPassword);
    const isString = _.isString(hashedPassword);
    if (!isBuffer && !isString) return false;
    return await bcrypt.compare(givenPassword, isBuffer ? hashedPassword.toString('utf8') : hashedPassword);
  } catch (err) {
    return false;
  }
}

module.exports = {
  hash,
  isValid,
};

