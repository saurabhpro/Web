function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator = generateSequence();

let one = generator.next();
console.log(JSON.stringify(one)); // {value: 1, done: false}
let two = generator.next();
console.log(JSON.stringify(two)); // {value: 2, done: false}
let three = generator.next();
console.log(JSON.stringify(three)); // {value: 3, done: true}

////////////////////////////////
//  or
////////////////////////////////
for (let value of generator) {
  console.log(value); // 1, then 2
}

//
let range = {
  from: 1,
  to: 5,

  // called once, in the beginning of for..of
  [Symbol.iterator]() {
    // ...it returns the iterator object:
    // onward, for..of works only with that object, asking it for next values
    return {
      current: this.from,
      last: this.to,

      // next() is called on each iteration by the for..of loop
      next() {
        // it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

// iteration over range returns numbers from range.from to range.to
console.log([...range]); // 1,2,3,4,5

////////////////////////////////
//  or
////////////////////////////////
let range2 = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    // a shorthand for [Symbol.iterator]: function*()
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

console.log([...range2]); // 1,2,3,4,5

////////////////////////////////
//  two way yeild
////////////////////////////////
function* gen() {
  let ask1 = yield '2 + 2 = ?';

  console.log(ask1); // 4

  let ask2 = yield '3 * 3 = ?';

  console.log(ask2); // 9
}

generator = gen();

console.log(generator.next().value); // "2 + 2 = ?"
console.log(generator.next(4).value); // "3 * 3 = ?"
console.log(generator.next(9).done); // true

/*
The first .next() starts the execution… It reaches the first yield.
The result is returned to the outer code.
The second .next(4) passes 4 back to the generator as the result of the first yield, and resumes the execution.
…It reaches the second yield, that becomes the result of the generator call.
The third next(9) passes 9 into the generator as the result of the second yield and resumes the execution that reaches the end of the function, so done: true.
*/
