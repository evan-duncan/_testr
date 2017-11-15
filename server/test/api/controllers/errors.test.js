const express = require('express');

const app = express();
const api = require('../../../api');
const request = require('supertest');

// create a bad end point only for testing
app.get('/error', (req, res, next) => next(new Error('Something went wrong')));
const mock = request(app.use(api));

describe('Errors Controller', () => {
  it('should have a 404 handler', (done) => {
    mock.get('/api/a-route-that-will-never-exist')
      .expect(404)
      .end(done);
  });

  it('should have an error handler', (done) => {
    mock.get('/error')
      .expect(500, 'Something went wrong')
      .end(() => done());
  });
});

