let arr1 = [1, 2, 3, 4];

// [[2], [4], [6], [8]]
console.log(arr1.map((x) => [x * 2]));

console.log(arr1.flatMap((x) => [x * 2]));
// [2, 4, 6, 8]

// only one level is flattened
console.log(arr1.flatMap((x) => [[x * 2]]));
// [[2], [4], [6], [8]]
