
## Creating a Function
```js
//function constructor
var fun1 = new Function('name', 'return name;');
fun1('Jessica');
//function declaration
function myFun(name){
    var greeting = 'Hello ' + name;
    return greeting;
}
myFun('Danny');
//function expression
var fun3 = function(name) {
    return name;
}
fun3('Mami');

```

## What Are Anonymous Functions?
Anonymous functions are function expressions. These expressions do not need to have a name to identify them.

```js
//Examples of Anonymous Functions
document.addEventListener('DOMContentLoaded', function(){
    console.log('content loaded');
});
(function(){
    console.log('running closure');
})();
```

Most use cases for anonymous functions are for closures or using a function as a argument for another function.


## method parameters
Up until ES6 properties, had a value of undefined if a value was not passed when the function was called. Default properties are not restricted to strings or numbers. Objects, arrays, and functions can be used as default values. One of the values that could be passed over is undefined the result would be the same as not passing a value. This would be different than passing null.

Properties can also be evaluated at call time. This would give you the ability to assign a function as the default property and return the result.
Properties can also be chained together.

## Using Rest Parameters Allow Unlimited Number of Parameters in a Function?
If the last parameter of a function is prefixed with `...`, all values that are passed to it will be part of an array.


Using rest parameters is similar to using the arguments object. However, there are some important differences. 

* The arguments object is not a real array. 
* This means that methods like `map, sort, and pop` will not work.
* The values of the arguments object would have to be converted into a real array first. 
* The arguments object also returns all arguments sent to a function. 

- Rest parameters only handle arguments that are not mapped to a name in the function. 
- The rest parameters do not have the same methods that the arguments object does; for example callee is not available.

## Spread Syntax?
The spread syntax allows functions, arrays, or variables to accept multiple arguments.

```js
function showSpread(one, two, three, four){
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
}
var myArray = [1,2,3,4];
//showSpread(myArray[0], myArray[1], myArray[2], myArray[3]) //without using spread
//showSpread(...myArray); //using the spread syntax
var dayInfo = [1975, 7, 19];

var dateObj = new Date(...dayInfo);
console.log(dateObj); //returns Tue Aug 19 1975 00:00:00 GMT-0400 (EDT)

var numArray2 = [ 2, 3, 4, 5, 6, 7]
var numArray = [1, ...numArray2, 8, 9, 10];
console.log(numArray); //returns 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

var part1 = [1,2,3];
var part2 = [4,5,6];
var part3 = [...part1, ...part2];
console.log(part3); //returns 1,2,3,4,5,6
```

## () => {}
* Arrow functions give you a shorter way of creating functions. 
* Using this syntax removes some of the features you would be used to having when using a function expression. 
* Arrow functions are not named; they can be assigned to a variable but are always anonymous. 
* The basic syntax has a set of parentheses that will hold all the parameters like a function expression. Next the arrow, then curly braces ({}) that will have the body of the function inside.

* Parentheses are optional only when one parameter is being passed. If no parameters are being passed, parentheses are required.

* Rest and default parameters are supported with arrow functions as well as with object destructuring.

* When using arrow functions, keep in mind that the keyword `this` is not available. It inherits that property from the enclosing scope.
```js

//ES 5 
document.getElementById('myButton').addEventListener('click', function(){
	var self = this;
	self.currentInterval = 0;
	setInterval(function myInterval(){
		self.currentInterval++;
	}, 1000);
});
```
The first example first shows how the keyword `this` has different context between the callback function 
and the function associated with `setInterval`. 
The only way to bridge the gap is the create a new variable

*(this is why in reval's js file always `var me = this` is done as `this` context can chnage based 
on from where the callback will be executed .*

The inner function (closure) can access the outer variable without using the keyword `this`.

```js
//ES 6
document.getElementById('myButton').addEventListener('click', () => {
	this.currentInterval = 0;
	setInterval(() => {this.currentInterval++;}, 1000);
});


//retuning object literals
var myObj = () =>  ({name:'June'}) ;
console.log(myObj()); //returns Object {name: "June"}
```
The second example done with ES6 shows a similar version that is less verbose using the arrow functions. 
Because arrow functions inherit the property this (due to lexical scoping), you do not need to define another 
variable to reference the outer context.

If the arrow function needs to return an object literal, the object must be surrounded by parentheses. 
The reason for this is because if the block were to start with the curly braces ({}), the JavaScript engine 
does not know the difference between an object literal and the code block. Therefore, by surrounding the 
object with parentheses the object will be returned, even if the return keyword is not explicitly used.

## super and this work as expected
Just a not on this
```js
console.log(this); //returns Window

function globalFunction(){
	return this;
}

//First let’s talk about the global context. If you were to just print out the value 
//of this in the console in an otherwise blank JavaScript file, it would refer to the Window object.

console.log(globalFunction()); //returns Window

console.log(window.globalFunction());

function globalStrictFunction(){
	'use strict'
	return this;
}
//When returning this from a function call, its value is also Window. In this instance, 
//the function is part of the global scope, which means you can also call this same 
//function this way: window.globalFunction(). In either case the result would be the same.

//In the earlier examples we are not using strict mode. Strict mode is a more restricted version 
//of JavaScript that is designed to have different semantics. If you were to use strict mode at 
//the top of the page, the first and second results would return undefined.

//Strict mode can also be defined on the function level. Before all other statements add use strict 
//to run the function in strict mode. When using the globalStrictFunction the result of this is undefined. 
//The reason you receive undefined is that this keeps the value of whatever it was set to when the function is being executed.

console.log(globalStrictFunction());
console.log(window.globalStrictFunction());


function saySomething(){
	return this.something;
}

/*
//USING THE BIND METHOD ON A FUNCTION
Using this method on a function creates a new function called a bound function (BF). 
The value of this is set to the value that is provided in the first argument. 
*/

var phrase = saySomething.bind({something: 'Brothers! Sisters!'});

//In the following example, the function saySomething returns a property called something. 
//On its own it would return undefined since there isn’t a variable in the function called something. 
//When using the bind method, we provide an object with the property something. 
//So the object becomes bound to the function and the property something now has a value.

console.log(saySomething()); //returns undefine
console.log(phrase());  //returns Brothers! Sisters!

function useCallFunction(){
	return this.greeting;
}


/*
//USING CALL AND APPLY ON A FUNCTION

Using the call and apply methods on a function is similar to using bind, where you define the object 
that the keyword this is bound to. 

In the previous example, the call method passes an object over and the function uses the properties 
of that object to return some values. If you’re using the apply method, you would get the same results.
*/
var greetingObj = {greeting: 'Hello, Mr. Robot'};

console.log(useCallFunction.call(greetingObj));
console.log(useCallFunction.apply(greetingObj));

/*
//USING AN EVENT HANDLER
If the function that is being executed is from an event handler, the value of this is set to the element 
that fired the event. The same is true if the event is fired from a inline event.
*/
document.getElementById('myButton').addEventListener('click', function(e){
	console.log(this); //<button id="myButton">Click Me</button>
});

/*
//USING ARROW FUNCTIONS
Arrow function expressions give you the ability to create functions just like a function expression but
with less code. They start with the list of parameters, the arrow pointing to the statement that needs 
to be executed. If using this in a global context, the Window object would return. 

It is also the case if the function were to be called as the method of another object, 
or if the call or bind methods were used. This lets you know that the value of this will be set 
to the execution context. For example, if arrow functions were used inside an object, 
the result of this would be the object that this was defined in.
*/

var globalArrayFunction = () => this;
console.log(globalArrayFunction());  //returns Window

var micCheck = {
	isThisOn: function(){
		return (() => this);
	}
}

var returnedFunction = micCheck.isThisOn();
console.log(returnedFunction()); //returns Object

/*
//USING OBJECT METHODS
Object methods make using this much simpler. The value is always set to the object the method 
is called on, no matter how the method is defined.

*/
var theNumber = {p: 42};
function magicNumber(){
	return this.p;
}

theNumber.theMagicNumber = magicNumber;
console.log(theNumber.theMagicNumber()) //returns 42
```