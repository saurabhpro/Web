class MegaArray extends Array {
  constructor(...contents) {
    super(); // The class constructor has to call super(), so this is defined when inheriting from Array.
    this.contents = contents;
  }
}

export const mArr = new MegaArray(1, 2, 3);
console.log(mArr.contents);

/*
 * saurabh.kumar@C02D70TBMD6N Core JS % node mdn/super.js
 * [ 1, 2, 3 ]
 */

// https://javascript.info/object-methods#arrow-functions-have-no-this

let arr = [1, 2];
// create an array from: arr and [3,4]
console.log(arr.concat([3, 4])); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log(arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log(arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6

// for each element call console.log
['Bilbo', 'Gandalf', 'Nazgul'].forEach(console.log);

['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
