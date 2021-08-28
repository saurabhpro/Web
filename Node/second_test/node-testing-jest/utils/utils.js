export function add(a, b) { return a + b; }

export function asyncAdd(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

export function square(x) { return x * x; }

export function asyncSquare(x, callback) {
  setTimeout(() => {
    callback(x * x);
  }, 1000);
}

export function setName(user, fullName) {
  const names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
}
