// ES6
const obj1 = { color: 'blue', model: 'Model1', make: 'Brand1' };
const list = [];
for (let prop in obj1) {
  list.push(obj1[prop]);
}

console.log(list);

//ES2021
// Pass obj1 as a parameter to the Object.values() method and embed the Object.values() method inside a console.log() statement.
const obj2 = { color: 'blue', model: 'Model1', make: 'Brand1' };
const list2 = Object.values(obj2);

console.log(list2);

/*
saurabh.kumar@C02D70TBMD6N Core JS % node mdn/values.js 
[ 'blue', 'Model1', 'Brand1' ]
*/

console.log(5 ** 3); // power 5^3 = 125
