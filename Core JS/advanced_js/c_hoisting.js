// What will this code print?

// https://gist.github.com/jawache/7153e555fea2db73b952

console.log(moo);

var moo = function () {
  console.log('loo');
};

/*Because of variable hoisting the var moo is moved to the top of the scope, and since it's just declared (var moo;) it's default value is undefined.*/
