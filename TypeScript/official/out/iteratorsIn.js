//An object is deemed iterable if it has an implementation for the Symbol.iterator property.
//Some built-in types like Array, Map, Set, String, Int32Array, Uint32Array, etc. have their Symbol.iterator property already implemented.
/*
for..of statements
    
for..of loops over an iterable object, invoking the Symbol.iterator property on the object. Here is a simple for..of loop on an array:
*/
let someArray = [1, 'string', false];
for (let entry of someArray) {
  console.log(entry); // 1, "string", false
}
/*
for..of vs. for..in statements

Both for..of and for..in statements iterate over lists; the values iterated on are different though,
for..in returns a list of keys on the object being iterated,
for..in operates on any object; it serves as a way to inspect properties on this object.

for..of returns a list of values of the numeric properties of the object being iterated.

Here is an example that demonstrates this distinction:
*/
let list5 = [4, 5, 6];
for (let i in list5) {
  console.log(i); // "0", "1", "2",
}
for (let i of list5) {
  console.log(i); // "4", "5", "6"
}
//# sourceMappingURL=iteratorsIn.js.map
