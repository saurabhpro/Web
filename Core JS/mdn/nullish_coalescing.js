let result;
let a = null;
let b = 9;

result = a !== null && a !== undefined ? a : b;
console.log(result);

// with nullish coalescing operator
let c = null;
result = a ?? c;
console.log(result); // if both are null, return null and if one is undefined, return undefined

// shows the first defined value:
let firstName = null;
let lastName = null;
let nickName = 'Supercoder';

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? 'Anonymous'); // Supercoder
