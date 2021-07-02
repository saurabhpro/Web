# Chapter 1 - JS Types

## const keyword

the const statement provides you with a way of declaring a variable that is immutable; that is, it will always be
assigned to its initial value, and cannot be changed, cannot be “mutated”. It is a constant. One of the things to keep
in mind is that objects can be updated. Constants only work with primitive values.

It is important to note that constants can never be declared without a value; this will cause a SyntaxError. Constants
must always have a value assigned to them upon declaration.

## constructor used to create instance

```js
function () { return 1 }; // A Function literal
new Function('return 1'); // A Function created from its constructor

{};             // An empty Object literal
new Object();   // An empty Object created from its constructor
```

## typeof

```javascript
if (typeof a === 'undefined') {
  // Strict Equality Operator (`===`)
  console.log("Variable 'a' is undefined");
}
```

The typeof operator can be used to determine if a type is undefined. It returns a string indicating the type of the
operand, but does not throw an error if the variable has never been declared.

## function returns something

All functions return a value whether the original developer intended it or not. A function returns `undefined` if a
value was not returned or the return statement inside a function is empty.

## What’s the Difference Between Null and Undefined?

A variable is undefined only when the variable is declared but not assigned a value, or the variable has been explicitly
assigned the undefined value.

A variable is null only when it has been assigned the null value.

## falsy

0 is false -0 is false null is false false is false NaN is false undefined is false Empty String is false

## Coercing a String Using the String Constructor

`String([1,2,3]); // The String "1,2,3"`

## NaN and Infinity

```js
const a = NaN;
const b = Infinity;
const c = -Infinity;
const d = 3;
if (Number.isNaN(a)) {
  console.log('a is a NaN (not a number)');
} else {
  console.log('a is a real Number, not NaN');
}

if (Number.isFinite(b)) {
  console.log('b is a finite Number');
} else {
  console.log('b is not a finite Number, it is either +Infinity or -Infinity');
}
```

## Date object with dateString

The Date object constructor can accept a string that’s RFC 2822 (for example `"Fri, 24 Jan 2014 21:18:23 +0000"`), or
RFC 3339 compliant (for example, `"2014-01-24T21:18:23+00:00"`). We’ll pass the date string into the date constructor to
create a Date object instance.

```javascript
//Generating a Date with a Date String
const myDateString = 'January 16, 1975 17:07:00';
const myDate = new Date(myDateString);
console.log(myDate);

if (myDate instanceof Date) {
  console.log('a is a Date');
}
```

We can’t use the typeof operator to return the variable’s type because typeof will return the string "object" for a Date
instance (as it is not a literal).

## Constructor Property

### Problem

Some objects are created from the result of a constructor (such as Date), but they also inherit from their parent
constructor objects.Forexample,a Date object will return true for `instanceof` Date,but will also return true
for `instanceof` Object.This becomes a problem when trying to find the direct descendant of an object.

### Solution

Every object that has a constructor and can be created by using the new keyword will have a constructor property. This
is set to the constructor function, so for example new Date()`s constructor property is Date.

```javascript
const date = new Date();

if (date.constructor === Date) {
  console.log('date is a Date instance');
}
```

## Injecting Variables into a String with Template Literals

```javascript
const name = 'Bob';
console.log('Hello ' + name + '!'); // The old way to do this, cumbersome and error prone
console.log(`Hello ${name}!`); // Template Literals, shorter, more succinct, and less error prone

const otherName = 'Mary';
const thirdName = 'Jim';
console.log('Hello ' + otherName + ', how is ' + thirdName + '?'); // Can get very messy
console.log(`Hello ${otherName}, how is ${thirdName}?`); // Much cleaner
```
