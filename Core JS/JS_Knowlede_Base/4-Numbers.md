
# Chapter 4
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

~The **`trunc()`** method will remove all numbers after the decimal, but has no support in Internet Explorer.

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

`Math.max` is a static method so it is used as is. If no arguments are given to it, the answer is `–Infinity`. If any of the arguments cannot be converted into a number, then the answer will result in `NaN`.
If you are using an array and not putting values directly into the method, use the apply method to direct the browser to where it should find the array.

