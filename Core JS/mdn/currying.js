// just sharing common context of outer functions

const curry = (func) => {
  return function curried(...args) {
    // keeping it named so we can see the output
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return (...args2) => {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
};

const sum = (a, b, c) => {
  return a + b + c;
};

let curriedSum = curry(sum);
console.log(curriedSum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying

// When we run it, there are two if execution branches:

// If passed args count is the same or more than the original function has in its definition (func.length) , then just pass the call to it using func.apply.
// Otherwise, get a partial: we don’t call func just yet. Instead, another wrapper is returned, that will re-apply curried providing previous arguments together with the new ones.
// Then, if we call it, again, we’ll get either a new partial (if not enough arguments) or, finally, the result.