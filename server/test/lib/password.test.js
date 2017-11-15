const { expect } = require('chai');
const password = require('../../lib/password');

const text = 'foo';

describe('password', () => {
  describe('#hash', () => {
    it('should take plain text and return a hash', () => password.hash(text).then(hash => expect(hash).not.to.equal(text)));

    it('should create different hashes for the same word', () => {
      let hash1;
      return password.hash(text)
        .then((hash) => {
          hash1 = hash;
          return password.hash(text);
        })
        .then(hash => expect(hash).not.to.equal(hash1));
    });
  });

  describe('#isValid', () => {
    it('should validate that a plain text word is equal to a given hash', () => password
      .hash(text)
      .then(hash => password.isValid(hash, text))
      .then(isValid => expect(isValid).to.be.true));

    it('should be able to validate plain text against a buffered hash', () => password
      .hash(text)
      .then(hash => password.isValid(Buffer.from(hash), text))
      .then(isValid => expect(isValid).to.be.true));

    it('should be able to validate plain text against a string hash', () => password
      .hash(text)
      .then(hash => password.isValid(String(hash), text))
      .then(isValid => expect(isValid).to.be.true));

    it('should return false if the given hash is not a string or buffer', () => password
      .hash(text)
      .then(hash => password.isValid(Number(hash), text))
      .then(isValid => expect(isValid).to.be.false));
  });
});

