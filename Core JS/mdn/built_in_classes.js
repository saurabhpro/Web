// https://javascript.info/extend-natives
// But built-in classes are an exception. They don’t inherit statics from each other.

let array = new Array();
array.push(1);
array.push(3);
array.push(3);
console.log(array.keys());

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // built-in methods will use this as the constructor (we can choose Array)
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
console.log(arr.isEmpty()); // false

// filter creates new array using arr.constructor[Symbol.species] as constructor
let filteredArr = arr.filter((item) => item >= 60);

// filteredArr is not PowerArray, but Array
console.log(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function
