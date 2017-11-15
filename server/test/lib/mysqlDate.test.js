const { expect } = require('chai');
const mysqlDate = require('../../lib/mysqlDate');

describe('mysqlDate', () => {
  it('should return inputs as a YYYY-MM-DD HH:mm:ss format', () => {
    const d = new Date('12-04-1995 04:30:15 -0');
    expect(mysqlDate(d)).to.equal('1995-12-04 04:30:15');
  });

  it('should convert Dates', () => {
    expect(mysqlDate(new Date())).to.be.a('string');
  });

  it('should convert strings', () => {
    expect(mysqlDate('12-04-1995')).to.be.a('string');
  });
});

