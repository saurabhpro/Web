import expect, { createSpy } from 'expect';
import rewire from 'rewire';

var app = rewire('./app');

describe('App', () => {
  var db = {
    saveUser: createSpy(),
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = createSpy();
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });

  it('should call saveUser with user object', () => {
    var email = 'andrew@example.com';
    var password = '123abc';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({
      email,
      password,
    });
  });
});
