const allNum = (array, func) => {
  let result = true;
  for (const val of array) {
    result = result && func(val);
  }
  return result;
};

console.log(everyNum([NaN, NaN, 4], isNaN));
