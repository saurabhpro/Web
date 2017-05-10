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
*Delete does not free up any memory as a direct result of its operation.* 
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

# Chapter 3 - Working with Strings
## Iterating 
### Over a String’s code Units Using for...in
```js
var myString = 'abc';
for(var i in myString) {
    console.log('Character at fromPosition ' + i + ' is ' + myString[i]);
}
```
The output is:
- Character at fromPosition 0 is a
- Character at fromPosition 1 is b
- Character at fromPosition 2 is c


for...in loops will check the “enumerable keys” of an object or primitive value. In the case of a string, its enumerable properties are index keys for each code unit in the string, from 0 to the value of `String.prototype.length`. 

### String’s Code Points Using for...of

With a for...of loop you can iterate over all of the code units in a string. It uses the string’s (hidden) underlying String.prototype[Symbol.iterator] function, which will iterate over each code point in a string, returning a string for each iteration, which is a code point for that fromPosition.
The Code
Iterating Over a String’s Code Units Using for...in
```js
var myString = 'abc\uD83D\uDCD6';
for(var v of myString) {
    console.log(v);
}
```
The output is:
- "a" 
- "b"
- "c"
- ⍰

## Determining If a String Contains a Smaller String Using contains()
```js
if ('abc'.contains('a')) {
    console.log('The string "abc" contains the letter a');
}
```

## Determining If a String Ends with Substring Using endsWith()
```js
if ('abc'.endsWith('a')) {
    console.log('The string "abc" ends with the letter a');
} 
```

## Index of an Occurring Substring with indexOf()
console.log('letter a in "abc" is in fromPosition ' + 'abc'.indexOf('a') );

## Getting a Substring from a String 
### slice(start, end)
```js
//-sign means from end of string
console.log('abc'.slice(1));
console.log('Hello World'.slice(6));
console.log('It was the best of times'.slice(-5));
console.log('It was the best of times'.slice(7, -6));
```
The output is:
- Bc
- World
- times
- the best of

### split(using_what)

## Determining If a String “Comes Before” Another with `localeCompare( )`
```js
'a'.localeCompare('b') == 1
'b'.localeCompare('a') == -1
'a'.localeCompare('a') == 0
```

## Counting the Occurrences of a Substring
```js
function findOccurrences(string, substring) {
  var occurrenceCount = 0, fromPosition = 0;
  
  while ((fromPosition = string.indexOf(substring, fromPosition)) !== -1)  {
      occurrenceCount++;
      fromPosition += substring.length;
  }

  return occurrenceCount;
}
```


# Chapter 3
## Checking If a Value Is Not a Number
Both the global method `isNaN` and the `Number.isNaN` method can be used. You can also check the datatype
by using the `typeof` operator.

## Formatting a Number to a Fixed Amount of Digits
```js
var numObj = 1.23456789;
numObj.toPrecision(); //returns 1.23456789
numObj.toPrecision(2); //returns 1.2 (total 2 digits)
numObj.toPrecision(5); //returns 1.2346 Five numbers total. Notice how it is rounded up
numObj.toFixed(5); //returns 1.23457 Notice how it rounds up
numObj.toFixed(2); //returns 1.2
```

`toPrecision()` and `toFixed()` will both return a string with the formatted numbers. Using toPrecision will set the amount of digits used. 

When using toFixed, the amount of digits after the decimal point will be set.

The trunc() method will remove all numbers after the decimal, but has no support in Internet Explorer.

## Checking to See If a Number Is Finite
`isFinite` has a global function and one that is associated with the Number object as of ES6.

## Number and Math
```js
Checking for Integers var myNumber = 1
Number.isInteger(myNumber);//returns true does not work in IE
Number.isInteger('2'); //returns false does not work in IE

Math.floor(1.6); //returns 1
Math.floor(1.4); //returns 1
Math.floor(NaN); //returns NaN

Math.ceil(1.6); //returns 2
Math.ceil(1.4); //returns 2

//Use Math.floor() to round to the closest lowest integer and Math.ceil() when rounding to the closest highest integer.

Math.round(1.6); //returns 2
Math.round(1.4); //returns 1

Math.round(-1.5); //returns -1
Math.round(-1.6); //returns -2

Math.round('3.5'); //returns -4
Math.round('jenny'); //returns NaN
Math.round(null); //returns 0

Math.abs()   //returns NaN
Math.abs(-1)  //returns 1
Math.abs('-1')  // returns 1
Math.abs(null)  //returns 0
Math.abs('miho')   //returns NaN
Math.abs('')  //returns 0

Math.sqrt(’Roger’) //result NaN
Math.sqrt(1000); //result 31.622776601683793


```

## Random numbers
```js
function getRandomBetweenMinAndMax(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
```
The random method in the Math object returns a floating point pseudo-random number in the range of 0 or 1.

## Determine the Math.max Method to Return the Highest Number
```js
Math.max(1,10) //returns 10
Math.max(-100,10) //returns 10
Using apply as part of the method call can define scope of the array.
var myNumArray = [1,2,3,4,5,6,7,8,9];
Math.max.apply(null,myArray); //returns 9
This would give you the same result:
Math.max.apply(this,myArray); //returns 9
Math.max.apply(myArray) //returns –Infinity
Math.max(myArray) //Returns NaN
```

Math.max is a static method so it is used as is. If no arguments are given to it, the answer is –Infinity. If any of the arguments cannot be converted into a number, then the answer will result in NaN.
If you are using an array and not putting values directly into the method, use the apply method to direct the browser to where it should find the array.


# chapter - 5
Zero-Fill Right Shift (>>>) 
~0; //-1
~2; //-3
~7; //-8,

## chapter - 6
### Creating Instances of the Date Object
new Date();

The quickest way is to pass a string representing the date. The value should be able to be in a format that the Date.parse() can recognize. 

JavaScript does not always format the date exactly the same in every browser. Some recommendations would be:
- If you add hours, also add minutes, because not all browsers will parse with just hours.
- Milliseconds seem to only get parsed in Chrome.
- If possible, use the YYYY/MM/DD format.
- Hyphens (-) work best in WebKit browsers but are trouble in Firefox and IE; use slashes (/) as an alternative.
- Make sure the year is four numbers. For example, passing ‘1/1/16’ returns 1916-01- 01 as the date in Firefox and IE.
- Using UTC time works in more recent browsers, but may not be supported in older browsers. IE 9, for example, would not parse it correctly.

```js
var now = new Date(); //returns todays date and time
console.log(now.getDate()); //returns the day of the month from 1 to 31 console.log(now.getDay()); //returns the day of the week its zero based like an array 0 - 6; console.log(now.getFullYear()); //returns the current year
console.log(now.getHours()); //returns hours from 0-23
console.log(now.getMonth()); //return month from 0-11
//time information
console.log(now.getSeconds()); //returns seconds from 0-59
console.log(now.getTime()); //returns the amount of milliseconds since the first of January 1970

if(date1.getTime() == date2.getTime()){
    console.log('date are the same');
}
```

## figure out the offset between UTC and local time.
var offSet = currentDate.getTimezoneOffset() / 60; converts minutes to hours
console.log(offSet);
for daylight saving - write custom method
```js
//check if we are on daylight savings time
var today = new Date();
function isDST(){
        var jan = new Date(today.getFullYear(), 0, 1);
        var jul = new Date(today.getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}
if(isDST() != today.getTimezoneOffset()){
        console.log('On DST');
}else{
        console.log('Not On DST');
}
```
The example creates two date objects. The first of the year and the first of July. These two dates should return different offsets. For example, New York returns -5 normally and -4 during daylight savings time. To figure out if you are currently on daylight savings time, you can compare the current local time offset with the larger of the two date objects by returning the larger number using the max() method. This is why it returns the larger of the two offsets. If the function returns the local offset and the number and they are different, then you are on daylight savings time.
