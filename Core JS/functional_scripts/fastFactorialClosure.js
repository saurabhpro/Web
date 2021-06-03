const forEachT = (array, func) => {
  for (let val of array) console.log('factorial(' + val + ') = ' + func(val));
};

const memoize = (func) => {
  let localArr = {};
  return (arg) => localArr[arg] || (localArr[arg] = func(arg));
};

const fastFactorial = memoize((n) => {
  if (n === 0) return 1;
  else return n * fastFactorial(n - 1);
});

//console.log(fastFactorial(5))
forEachT([1, 2, 3, 4, 5, 6, 7, 8, 18], fastFactorial);
