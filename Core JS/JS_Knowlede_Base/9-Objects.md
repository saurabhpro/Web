# Chapter 9

## properties

The term properties are sometimes used when talking about variables assigned to an object and functions assigned to an
object.

When accessing variables, dot notation is used more often. However you can also use array-like bracket notation.

In that case, property names are in quotes. Other languages call this a hash, lookup table, dictionary, or map.

When giving properties names using dot syntax, the same rules apply that you would use for variables. Property names can
have numbers, underscores, and dollar signs. However, they cannot start with a number. _If you’re using bracket
notation, property names must be a string._

## Returning Only the Enumerable Properties of an Object

```js
var myObj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(myObj)); //returns ["a", "b", "c"]
```

This method will return an array of the object’s enumerable properties, in the same order as if you performed a for..in
loop.

- If you are using ES5 and pass over a primitive (for example, a string), you will receive a type error.
- If you are using ES6, each letter in the string will return as its index number.

## check if enumerable

```js
var myObj = { a: 1, b: 2, c: 3 };
console.log(myObj.propertyIsEnumerable('a')); //returns true
console.log(myObj.propertyIsEnumerable('length')); //returns false
```

Every object has a `propertyIsEnumerable` method. It will return true if the property could be enumerated similar to the
results of a for..in loop.

Properties that are inherited by way of the prototype chain are not checked. If the property is not enumerable, the
method will return false.

## check if a property is from its class and not inherited

`if(superHero.hasOwnProperty(key)`

By default the for..in loop will display all the properties, including properties included in the prototype chain. If
you only are interested in the properties directly associated with the object itself, use the hasOwnProperty method.
This will only return objects that are not part of the prototype.

## for...of loop ?

The for...of loop is useful for looping through iterable objects. For example, TypedArrays, arguments, maps, and strings
are some of the objects that can be used.

The for...of loop works with iterable objects. This allows JavaScript to define or customize how the values are looped
over. Some types like arrays or maps have built-in iterables with a default behavior.
_Objects however do not have such a feature, resulting in an [Symbol.iterator] error._
