# JavaScript Recipes: A Problem-Solution Approach
[Chapter 1 - Types](JS Knowledge Base/1.Types.md)
# Chapter - 5
Zero-Fill Right Shift (>>>) 
~0; //-1
~2; //-3
~7; //-8,

# Chapter 7
## Array Basics
```js
var a = new Array('','');
var b = [];
b.length;

b.push(5);
b.push(6);
//b is now [5, 6] as push adds at end

a.concat(b);    //adds b at end of a
a.reverse();
```

## Add Items to an Array Within a Range
```js
var numberArray = [1,2,3,4];
numberArray.fill(5, 0, 1);
console.log(numberArray); //result [5, 2, 3, 4]
```

The `fill()` method will add a value given to your array. 
Two optional parameters are the start and end indexes. When given these parameters, you can update values based on the index number.

## Copying and Updating Elements in the Same Array
```js
var numberArray = [1, 2, 3, 4, 5, 6];
console.log(numberArray.copyWithin(3, 0));  //returns [1, 2, 3, 1, 2, 3]
```

`copyWithin()` takes three arguments— target, start, and end. 
All of these arguments are numbers. The end argument is optional; in that case, the browser will use the length of the array as the end value.

When discussing these parameters, target tells the browser which element in the array it should update. 
* The start argument defines which element it should start copying. 
* The target element would be 3 (4 because arrays are zero-based) and then it will start copying from 0 (the first element). 
* Since this example does not have an ending argument, it will copy the rest of the array and replace the elements in the array. 

*This method does not have support in Internet Explorer, Opera, or Safari.*

## add elements to the beginning of an array
```js
//The unshift() Method Pushes All Elements Back to Make Room for New Ones
var numberArray = [4, 5, 6];
numberArray.unshift(1, 2, 3)
console.log(numberArray); //returns [1, 2, 3, 4, 5, 6]
```


The `unshift()` method will shift elements in array-like objects and place new elements in the front of the current elements. This method will return the new length of the array when finished.

## The splice() Method Allows You To Add or Remove Elements of the Current Array
```js
var marxBros = ['Groucho', 'Harpo', 'Chico'];
marxBros.splice(2, 0, 'Zeppo');
console.log(marxBros); //returns ['Groucho', 'Harpo', 'Chico', 'Zeppo']
marxBros.splice(1, 3);
console.log(marxBros); //returns ['Groucho']
```

When using `splice`, you need to pass over at least two arguments. 
The first argument, start, tells the browser where to start modifying the array. The next value describes how many items you would like to delete, called the deleteCount. 

## The shift() Method Will Remove the First Element from the Array (FIFO)
```js
var marxBros = ['Groucho', 'Harpo', 'Chico'];
var shiftedItem = marxBros.shift();
console.log(shiftedItem); //returns ['Groucho']
//It basically deletes it from the array.
```

The `shift()` method will remove the first item in the array (the item at index 0). It will then shift the rest of the items forward. 
*This method changes the length of the array*

## The pop() Method Will Remove the Last Element from the Array (LIFO)
```js
var marxBros = ['Groucho', 'Harpo', 'Chico'];
marxBros.pop();
console.log(marxBros); //returns ['Groucho',  'Harpo']
```

## slice() Method Returns Only the Elements in the Given Range
```js
var albumNames = ['Hack', 'Violator', 'Designation', 'Wild', 'Surrender'];
console.log(ablumNames.slice(0,2)); //returns ["Hack", "Violator"]
```
This method returns a shallow copy of the array. That means that the copy is done by reference. The slice() method take two arguments, The first is the start index number, where the browser should start editing the array. The second argument is the end index number. 
*The array returns all elements up to the end number.*

## Return the Index or Object Based on a Value in an Array?
Use the `find()` method to get the value from an array and `findIndex()` to get the index number.

These methods work in a similar way that the map method works. You can assign a callback function to the method or use an anonymous function. In either case, you can run the function on each element of the array and evaluate it. If the test passes, you return the value or the index number from the array.

The callback function will receive the element, index number, and the array each time it’s called. There is an optional parameter that lets you set the value of this. 
*These methods are not supported in Internet Explorer or Opera.* 
TODO what about EDGE ?


## Spread Operator
```js
function myValues(...values){
           return values
}
console.log(myValues(1,2,3)); // returns [1, 2, 3]
console.log(myValues(1,2,3,4,5,6)); // returns [1, 2, 3, 4, 5, 6]
var firstThree = ['One', 'Two', 'Three'];
var myArray = [...firstThree, 4, 5, 6];
console.log(myArray); // returns  ["One", "Two", "Three", 4, 5, 6]
[a ,b, ...otherShips] = ['Tardis', 'X-Wing', 'B-Wing', 'Enterprise', 'Moya']
console.log(otherShips); // returns ["B-Wing", "Enterprise", "Moya"]
```

The spread operator works in a similar way to the rest parameter. The main difference is the spread operator will let you express multiple values inside a single variable, whereas the rest parameter takes all values after the first one and expresses each value as an element in an array.
In these examples, there is a function that can take multiple arguments. The second takes the values of the first array and adds them to the second array.

 It is important to note that, without the dots (...), we would be creating a multi-dimensional array. In the third example, without the dots, the browser would just map the next value. 
*The spread operator is available in Chrome, Firefox, and Microsoft Edge.*

## Returning an Array When Arguments Are Passed to the Function
```js
function myValues(){
      return Array.from(arguments)
}
console.log( myValues('one', 'two', 'three')); // returns ["one", "two", "three"]
```
The `from()` method is a static method. Using it is similar to using a method of the Math class. This method can take three arguments, the second and third are optional. The first is the array-like object; the second is a map function.
This function works the same way as the map method. The function is executed on each element of the array. The third optional argument is the value that will set the value of this while the function is being executed. 
*This method does not have support in Internet Explorer or Opera.*

# Chapter - 8 
## Array with special loops
```js
/*
The for..of loop allows you to work on each element of the array. Each iteration of the loop will assign the value of each property to the variable that you set in the loop. This variable is set using the let statement, which creates a block-level variable. It also can be set using the var statement. The second argument is the object that you are iterating over.
*/
var alphaArray = ['a', 'b', 'c', 'e', 'd', 'e', 'f', 'g'];
for (let value of alphaArray) {
     console.log(value);  //returns a,b,c,d,e,f,g
}


/*
For..in loops allow you to loop only over enumerable properties of array-like objects. This loop works in an arbitrary order. If order is important, use a for loop from the previous example. Built-in objects like arrays and objects have non-enumerable properties from Object.prototype and String.prototype.
*/
for (prop in alphaArray){
     console.log("alphaArray." + prop + " = " + alphaArray[prop]);
}
```

## Sort an Array
sorts in place, natural order, unstable
`arr.sort()`
This method can also accept a function to make custom comparisons. If it is not supplied to the method, it will sort elements based on the Unicode point value.

```js
var multiDArray = [[7,8], [3,4], [1,2], [5,6]];
multiDArray.sort(function(a,b){
     return a[0] - b[0];
});
console.log(multiDArray); //returns [[1,2], [3,4], [5,6], [7,8]];

```

## forEach()

## Test for a False Condition in an Array?
The `every()` method will run on every element. The important difference is that the callback function will evaluate the element and return true only if every element meets the conditions. Otherwise, it will stop evaluating and return false. This function is only called on indexes with a value.
```js
//Appending the Values of an Array to Another Array
var myArray = [9, 2, 7, 6, 8, 5, 3];
myArray.every(function(element){
     console.log(element >= 1); //returns true
});
```

##  Test for a True Condition in an Array?
```js
//Reversing Elements in the Array Using the Reverse Method
var myArray = [9, 2, 7, 6, 8, 5, 3];
    myArray.some(function(element){
        console.log(element == 9); //returns true then false for all the other values
    });
```
The `some()` method returns true for the element that meets the condition. It will return false for everything else. Just like the `every()` method, it will not execute on indexes that do not contain a value or have been deleted.