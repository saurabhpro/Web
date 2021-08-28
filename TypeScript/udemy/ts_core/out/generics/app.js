'use strict';

// Simple Generic
function echo(data) {
  return data;
}

console.log(echo('Max'));
console.log(echo(27));
console.log(echo({ name: 'Max', age: 27 }));

// Better Generic
function betterEcho(data) {
  return data;
}

console.log(betterEcho('Max').length);
console.log(betterEcho(27));
console.log(betterEcho({ name: 'Max', age: 27 }));
// Built-in Generics
const testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll(args) {
  args.forEach((element) => console.log(element));
}

printAll(['Apple', 'Banana']);
// Generic Types
const echo2 = betterEcho;
console.log(echo2('Something'));

// Generic Class
class SimpleMath {
  calculate() {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
//# sourceMappingURL=app.js.map
