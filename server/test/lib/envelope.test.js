const { expect } = require('chai');
const envelope = require('../../lib/envelope');

describe('JSON Envelope', () => {
  describe('status', () => {
    it('should set a status property for the given status', () => {
      expect(envelope(200, 'OK').status).to.equal(200);
    });
  });
  describe('message', () => {
    it('should set a message property for the given message', () => {
      expect(envelope(200, 'OK').message).to.equal('OK');
    });
  });
  describe('data', () => {
    [
      { type: 'object', data: { foo: 'bar', baz: 1 } },
      { type: 'array', data: [{ foo: 'bar' }, { foo: 'baz' }] },
    ].forEach((test) => {
      it(`should wrap data that has the type: ${test.type}`, () => {
        const res = envelope(200, 'OK', test.data);
        expect(res.data).to.be.an(test.type);
      });
    });
  });
});
