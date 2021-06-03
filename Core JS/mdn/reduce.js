'use strict';

export const sum = (...theArgs) => {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
};

let result = sum(1, 2, 3); // returns 6
console.log(result);

result = sum(1, 2, 3, 4); // returns 10
console.log(result);
