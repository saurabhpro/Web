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

The JavaScript interpreter specifically picks up the + sign with no preceding value as a “unary + operator” (section
12.4.9 of the ES6 spec). When found, it takes the value following it and tries to convert it to a numeric value. If it
is unable to, it will convert it into the `NaN` (Not a Number) object.

Internally, it coerces the value using the internal `ToNumber` function (section 7.1.3 in ES6), which has the same
effect as using the number constructor. In other words, +4 is the same as Number(4).

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

It is important to note that delete does not work on variables or declared functions—that is, it cannot delete things
that are not properties of objects or arrays. A common misconception around delete is that it is useful for freeing up
memory.
*Delete does not free up any memory as a direct result of its operation.*
For example, if you have an object that is referenced elsewhere in your code, as well as in an object you are deleting
from, then the object still has a hard reference, and therefore will not be freed. The only way delete will ever appear
to be freeing memory is if the deleted property was the only hard reference to an object, function, or array.

## Evaluating an Expression Without a Return Value with the Void Operator

The JavaScript interpreter reads the void keyword and executes the expression after it. It explicitly always returns
undefined, unless of course the remaining expression throws an Error.

`console.log( void( delete object.one ) ); // returns Undefined`

## You want to determine if an object contains (in itself or as part of its prototype) a particular property or function.

JavaScript’s in operator is a great way to check for the existence of property names inside an object or its ancestor
objects (the prototype chain).

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