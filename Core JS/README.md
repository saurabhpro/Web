# JavaScript Recipes: A Problem-Solution Approach
# Chapter 1 - JS Types

## const keyword
 
the const statement provides you with a way of declaring a variable that is immutable; that is, it will always be assigned to its initial value, and cannot be changed, cannot be “mutated”. It is a constant. One of the things to keep in mind is that objects can be updated. Constants only work with primitive values.

It is important to note that constants can never be declared without a value; this will cause a SyntaxError. Constants must always have a value assigned to them upon declaration.

## constructor used to create instance
```javascript
function () { return 1 }; // A Function literal
new Function('return 1'); // A Function created from its constructor

{};             // An empty Object literal
new Object();   // An empty Object created from its constructor
```

## typeof
```javascript
if (typeof a === 'undefined') { // Strict Equality Operator (`===`)
    console.log("Variable 'a' is undefined");
}
```
The typeof operator can be used to determine if a type is undefined. It returns a string indicating the type of the operand, but does not throw an error if the variable has never been declared.


## function returns something
All functions return a value whether the original developer intended it or not.
A function returns `undefined` if a value was not returned or the return statement inside a function is empty.

## What’s the Difference Between Null and Undefined?
A variable is undefined only when the variable is declared but not assigned a value, or the variable has been explicitly assigned the undefined value. 

A variable is null only when it has been assigned the null value. 

## falsy
0 is false
-0 is false
null is false
false is false
NaN is false
undefined is false
Empty String is false

## Coercing a String Using the String Constructor
`String([1,2,3]); // The String "1,2,3"`

## NaN and Infinity
```javascript
var a = NaN;
var b = Infinity;
var c = -Infinity;
var d = 3;
if ( Number.isNaN(a) ) {
         console.log("a is a NaN (not a number)");
} else {
         console.log("a is a real Number, not NaN");
}

if ( Number.isFinite(b) ) {
         console.log("b is a finite Number");
} else {
         console.log("b is not a finite Number, it is either +Infinity or -Infinity");
}
```

## Date object with dateString
The Date object constructor can accept a string that’s RFC 2822 (for example `"Fri, 24 Jan 2014 21:18:23 +0000"`), or RFC 3339 compliant (for example, `"2014-01-24T21:18:23+00:00"`). We’ll pass the date string into the date constructor to create a Date object instance.
```javascript
//Generating a Date with a Date String
var myDateString = "January 16, 1975 17:07:00";
var myDate = new Date(myDateString);
console.log(myDate);

if (myDate instanceof Date) {
    console.log("a is a Date");
}
```
We can’t use the typeof operator to return the variable’s type because typeof will return the string "object" for a Date instance (as it is not a literal).

## Constructor Property
### Problem
Some objects are created from the result of a constructor (such as Date), but they also inherit from their parent constructor objects.Forexample,a Date object will return true for `instanceof` Date,but will also return true for `instanceof` Object.This becomes a problem when trying to find the direct descendant of an object.

### Solution
Every object that has a constructor and can be created by using the new keyword will have a constructor
property. This is set to the constructor function, so for example new Date()`s constructor property is Date.
```javascript
var date = new Date();

if ( date.constructor === Date ) {
    console.log("date is a Date instance");
}
```

## Injecting Variables into a String with Template Literals
```javascript
var name = 'Bob';
console.log( 'Hello ' + name + '!' ); // The old way to do this, cumbersome and error prone
console.log( `Hello ${name}!` ); // Template Literals, shorter, more succinct, and less error prone

var otherName = 'Mary';
var thirdName = 'Jim';
console.log( 'Hello ' + otherName + ', how is ' + thirdName + '?' ); // Can get very messy
console.log( `Hello ${otherName}, how is ${thirdName}?` ); // Much cleaner
```

# Chapter 2 - JS Expressions

## Unary Addition (+) Operator to Coerce an Object to a Number
```js
console.log( + "42" ); // Coerces String to the Number 42
console.log( + '3.142' ); // Coerces String to the Number 3.142
console.log( + "-1e3" ); // Coerces String to the Number -1000
var myNum = '1.231'; // The String '1.231'
console.log( + myNum ); // Coerces String to the Number 1.231
console.log( + {} ); // NaN (Not a Number)
console.log( + 'foo' ); // NaN (Not a Number)
console.log( + + + + '1' ); // Operator can be repeated (value is the Number 1)
```
The JavaScript interpreter specifically picks up the + sign with no preceding value as a “unary + operator” (section 12.4.9 of the ES6 spec). When found, it takes the value following it and tries to convert it to a numeric value. If it is unable to, it will convert it into the `NaN` (Not a Number) object.

Internally, it coerces the value using the internal `ToNumber` function (section 7.1.3 in ES6), which has the same effect as using the number constructor. In other words, +4 is the same as Number(4). 

## Deleting an Object, Property, or Array Element with the Delete Operator
```js
var house = { floors: 3, bedrooms: 4, garden: true };
console.log( 'House has', house.floors , 'floors' );
console.log( delete house.floors ); // delete returns true
console.log( delete house.floors ); // delete returns true
console.log( 'House has', house.floors , 'floors' );
console.log( delete house );

var primes = [ 2, 3, 5, 7, 11 ];
console.log( delete primes[11] ); // delete returns false
console.log( delete primes[2] ); // delete returns true
console.log( primes );
console.log( delete primes );
```

It is important to note that delete does not work on variables or declared functions—that is, it cannot delete things that are not properties of objects or arrays.
A common misconception around delete is that it is useful for freeing up memory. 
---Delete does not free up any memory as a direct result of its operation. 
For example, if you have an object that is referenced elsewhere in your code, as well as in an object you are deleting from, then the object still has a hard reference, and therefore will not be freed. The only way delete will ever appear to be freeing memory is if the deleted property was the only hard reference to an object, function, or array. 

## Evaluating an Expression Without a Return Value with the Void Operator
The JavaScript interpreter reads the void keyword and executes the expression after it. It explicitly always returns undefined, unless of course the remaining expression throws an Error.

`console.log( void( delete object.one ) ); // returns Undefined`

## You want to determine if an object contains (in itself or as part of its prototype) a particular property or function.
JavaScript’s in operator is a great way to check for the existence of property names inside an object or its ancestor objects (the prototype chain).
```js
var house = { bedrooms: 4, floors: 3 };
if ('bedrooms' in house) {
    console.log('house has a "bedrooms" property');
}

var myDate = new Date();
if ('setDay' in myDate) {
    console.log('myDate has a "setDay" method');
}

var qualifiers = ['First', 'Second', 'Third', 'DNF'];
if (0 in qualifiers) {
    console.log('qualifiers has a "0" item');
}//true as in checks the key whic for array is always sequential
```


