const { expect } = require('chai');
const hash = require('../../lib/hash');

const HASH_LENGTH = 64;

describe('Hash', () => {
  describe('generateHash', () => {
    it('should return a hex string', () => expect(hash.generateHash('foo')).to.be.a.string);
    it('will generate a hash if data isn\'t provided', () => expect(hash.generateHash()).to.be.a.string);
    it(`will always be ${HASH_LENGTH} characters long`, () => {
      expect(hash.generateHash()).to.have.lengthOf(HASH_LENGTH);
      expect(hash.generateHash('foo:bar:baz')).to.have.lengthOf(HASH_LENGTH);
    });
    it('will add a time offset to the hash so it cannot be easily reproduced', (done) => {
      const creds = 'username:password';
      const h1 = hash.generateHash(creds);
      setTimeout(() => {
        const h2 = hash.generateHash(creds);
        expect(h1).not.to.equal(h2);
        done();
      }, 0);
    });
  });
});

