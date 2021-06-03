# Chpatr 10

## basics

```js
var numberSet = new Set();
numberSet.add(1);
numberSet.add(2);
numberSet.add(3);
numberSet.add(3); //does not get added

console.log(numberSet.entries()); //returns SetIterator {[1, 1], [2, 2], [3, 3]}

numberSet.delete('5');

numberSet.size;

numberSet.clear(); //removes all element
```

An array uses push to add elements, whereas sets use the add method. To remove elements, use the delete method.

## Difference Between the Keys and Values Methods?

Both methods return an iterator object that contains values for each element. The keys method is an alias for the values
method. (since sets values are unique, for Maps they are different)

```js
//Checking If a Value Exists in a Set
var numberSet = new Set();
numberSet.add(1);
numberSet.add(2);
numberSet.add(3);
numberSet.add('things');

console.log(numberSet.keys()); //returns SetIterator {1, 2, 3, "things"}
console.log(numberSet.values()); //returns SetIterator {1, 2, 3, "things"}

var elements = numberSet.values();
console.log(elements.next().value); //returns 1
console.log(elements.next().value); //returns 2
```

## Check If an Element Exists in a Set?

```js
var bandSet = new Set();
bandSet.add('Dave');
bandSet.add('Martin');
bandSet.add('Fletch');
console.log(bandSet.has('vince')); //returns false
console.log(bandSet.has('Dave')); //returns true
```

It's similar to find on arrays

## .entries()

The entries method will return an array of each element in the order of insertion.

```js
Creating a Custom Iterator with a Set
var bandSet = new Set();
    bandSet.add('Dave');
    bandSet.add('Martin');
    bandSet.add('Fletch');
    bandSet.add('Jim');
    bandSet.add('Paul');
    bandSet.add('Kurt');
    bandSet.add('Andy');
    bandSet.add('Vince');
var entry = bandSet.entries();
console.log(entry.next().value); //returns ["Dave", "Dave"]
console.log(entry.next()); //returns Object {value: Array[2], done: false}
while(entry.next().done == false){ //as long as the current item returns false then keep going console.log(entry.next().value)
}
```
