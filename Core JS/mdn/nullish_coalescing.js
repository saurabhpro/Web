let result;
let a = null;
let b = 9;

result = a !== null && a !== undefined ? a : b;
console.log(result);

// with nullish coalescing operator
result = a ?? b;
console.log(result);

// shows the first defined value:
let firstName = null;
let lastName = null;
let nickName = 'Supercoder';

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? 'Anonymous'); // Supercoder
