# chapter 8
## Why maps over Objects
maps can contain both objects and primitives as keys or values.
Maps Can Use Different Types as Keys, Whereas Objects Use Strings
```js
var mapObj = new Map(); //maps
    mapObj.set('myString', 'myString is a string key');
    console.log(mapObj.get('myString')); //myString is a string key

var myObj = {};
    mapObj.set(myObj, 'Object is a used as a key');
    console.log(mapObj.get(myObj)); //Object is a used as a key
```

## Adding and Removing Elements from a Map Object
Maps use the set method to set keys and values. Similar to the set object, it uses the delete method to remove a key.
```js
var mapObj = new Map();
    mapObj.set('myString', 'myString is a string key');
    mapObj.delete('myString');
    console.log(mapObj.get('myString')); //undefined

    mapObj.clear(); //to clear the map
```
When using the set method, both keys and values are required properties. Keys can be updated by using the set method with the same key. The delete method will expect a key to delete the key/ value pair from the object. If the element exists and has been deleted, the delete method will return true; otherwise it will return false.

## has() to check if key exists

## get all keys and all valus from Map
The Keys Method Will Return a MapIterator Object That Lets You Access the Keys of Each Element
```js
var mapObj = new Map();
    mapObj.set('1st value', '1st key');
    mapObj.set('2nd value', '2nd key');
    mapObj.set('3rd value', '3rd key');

    console.log(mapObj.keys()); //returns MapIterator object
var mapIterator = mapObj.keys();
    console.log(mapIterator.next().value); //1st value
    console.log(mapIterator.next().value); //2nd value

     console.log(mapObj.values()); //returns MapIterator object
var mapIterator = mapObj.values();
    console.log(mapIterator.next().value); //1st value
    console.log(mapIterator.next().value); //2nd value

//both key and values
    console.log(mapObj.entries()); //returns MapIterator object
var mapIterator = mapObj.entries();
    console.log(mapIterator.next().value); //["1st value", "1st key"]
    console.log(mapIterator.next().value); //["2nd value", "2nd key"]
```

