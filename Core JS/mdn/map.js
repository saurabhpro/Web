let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

console.log(obj.orange); // 2
// runs the function for each (key, value) pair
map.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});

let obj2 = {
  name: 'John',
  age: 30,
};

let map2 = new Map(Object.entries(obj2));

console.log(map2.get('name')); // John
