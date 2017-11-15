const crypto = require('crypto');

const ALGORITHM = 'aes-256-ctr';
const UTF8 = 'utf8';
const HEX = 'hex';

// The entire app needs this -- exit now if this isn't set
if (!process.env.SECURITY_KEY) {
  throw Error('SECURITY_KEY must be defined.');
}

module.exports.generateHash = function generateHash(data = crypto.randomBytes(256)) {
  return crypto
    .createHmac('sha256', process.env.SECURITY_KEY)
    .update(data)
    .update(Date.now().toString())
    .digest(HEX);
};

module.exports.encrypt = function encrypt(data) {
  const cipher = crypto.createCipher(ALGORITHM, process.env.SECURITY_KEY);
  let encrypted = cipher.update(data, UTF8, HEX);
  encrypted += cipher.final(UTF8);
  return encrypted;
};

module.exports.decrypt = function decrypt(data) {
  const decipher = crypto.createDecipher(ALGORITHM, process.env.SECURITY_KEY);
  let decrypted = decipher.update(data, HEX, UTF8);
  decrypted += decipher.final(UTF8);
  return decrypted;
};

