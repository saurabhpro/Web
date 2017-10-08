const request = require('supertest');

var app = require('./server').app;

describe('Server', () => {

  describe('GET /', () => {
    test('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toHaveProperty('error', 'Page not found.');
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    test('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toContainEqual({
            name: 'Andrew',
            age: 25
          });
        })
        .end(done);
    });
  });
});