# Chapter 3 - Working with Strings

## Iterating

### Over a String’s code Units Using for...in

```js
const myString = 'abc';
for (let i in myString) {
  console.log('Character at fromPosition ' + i + ' is ' + myString[i]);
}
```

The output is:

- Character at fromPosition 0 is a
- Character at fromPosition 1 is b
- Character at fromPosition 2 is c

`for...in` loops will check the “enumerable keys” of an object or primitive value. In the case of a string, its
enumerable properties are index keys for each code unit in the string, from 0 to the value of `String.prototype.length`.

### String’s Code Points Using for...of

With a for...of loop you can iterate over all of the code units in a string. It uses the string’s (hidden)
underlying `String.prototype[Symbol.iterator]` function, which will iterate over each code point in a string, returning
a string for each iteration, which is a code point for that fromPosition. The Code Iterating Over a String’s Code Units
Using for...in

```js
const myString = 'abc\uD83D\uDCD6';
for (let v of myString) {
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

```js
console.log('letter a in "abc" is in fromPosition ' + 'abc'.indexOf('a'));
```

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
'a'.localeCompare('b') == 1;
'b'.localeCompare('a') == -1;
'a'.localeCompare('a') == 0;
```

## Counting the Occurrences of a Substring

```js
function findOccurrences(string, substring) {
  let occurrenceCount = 0,
    fromPosition = 0;

  while ((fromPosition = string.indexOf(substring, fromPosition)) !== -1) {
    occurrenceCount++;
    fromPosition += substring.length;
  }

  return occurrenceCount;
}
```
