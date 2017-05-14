# Chapter 13 - Genrators
```js
function fun1(){
     console.log('function 1');
}
function fun2(){
     console.log('function 2');
}
//create a generator function with *symbol.
function *runFun(){
     yield;
     yield fun1();
     yield fun2();
}
//other way if 
var iterator = runFun();
console.log(iterator.next()); //pauses function  Object {value: undefined, done: false}
console.log(iterator.next()); //returns 'function1' Object {value: undefined, done: false}
console.log(iterator.next()); //returns 'function 2' Object {value: undefined, done: false}
console.log(iterator.next()); //done = true Object {value: undefined, done: true}

//other way to create generators
var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var myGenFunction = new GeneratorFunction('value',  'yield value'); // The last parameter defines what the function does.

var myGenIterator = myGenFunction();
console.log(myGenIterator.next()); //Object {value: undefined, done: false}
console.log(myGenIterator.next()); //Object {value: undefined, done: true}
```

The `yield` keyword is used to pause a function as it is running. This is very similar to the `return` keyword. 
One of the main differences is with `return`, the function is executed and the final value is returned to the caller. 
Here, the function can be executed again. 

When the function is paused using yield it cannot be restarted on its own. 
In order to restart the function, the iterator method `next()` must be called. 

In every instance, an object is returned with two properties. 
The `done` property will have a value of false, letting you know that you can run the `next()` method and continue using that function. The `value` property will return whatever value is being returned from the `yield` keyword.

## Creating a Function that Maintains State
```js
function *numCount(){
    var count = 0;
    while(count < 5)
        yield count++;
}

var irt = numCount();
console.log(irt.next()); //Object {value: 0, done: false}
console.log(irt.next()); //Object {value: 1, done: false}
console.log(irt.next()); //Object {value: 2, done: false}
console.log(irt.next()); //Object {value: 3, done: false}
console.log(irt.next()); //Object {value: 4, done: false}
console.log(irt.next()); //Object {value: undefined, done: true}
```
Because the `yield` keyword pauses the generator, the current values of the variables or state of the function is then frozen. 
The current value is then returned to the caller and can be updated when the `next()` method is called. 
This will run the generator and update the value until another `yield` keyword is reached, which would pause the generator again. 

Other ways to terminate yeild
* throw exception
* return statement

## Passing a Parameter Using the next() Method
```js
function *returnMSG(){
     var value = yield value
     return value;
}
var it = returnMSG();
console.log(it.next()); //Object {value: undefined, done: false}
console.log(it.next('things')); //Object {value: "things", done: true}
```

The next() method can let you pass properties to the generator function. The first time you run the next() method, yield does not have a value. The second time next() is called, you can push a parameter to the generator.

## Creating an Object with a Custom Iterator
```js
var countdown = {
     max: 3,
     [Symbol.iterator]() {
         return this;
},
next() {
    if(this.max == undefined){
        this.max = max;
      }else if(this.max > -1){
        return {value: this.max --};
      }else{
        return {done: true};
} }
};
for (let i of countdown) {
     console.log(i);
}
```

In order to make an object an iterator, it needs to know how to access items one at a time. 
This is done by having a next method in the object. 

ES6 provides some shorthand in defining properties and methods of an object. 
Here we can add `Symbol.iterator` as a property using square brackets. 
After that, the next method has been defined without using the word function. 

This is also valid JavaScript as of ES6. This method will check the current value, change it, 
and return an object with the property’s value and done. 

Now that this object has an iterator, you can use it within a `for..of` loop. 
*It is important to note as of this writing that Symbol.iterator does not have support in Internet Explorer or Safari.*

## Custom Iterator to Make a Fibonacci Sequence 
```js
var fibObj = {
    one: 0,
    two: 1,
    temp: 0,
     [Symbol.iterator](){
        return this;
},
    next(){
        this.temp = this.two;
        this.two = this.temp + this.one;
        this.one = this.temp;
        return {value: this.two}
} }
for(var I = 0 ; I < 1000; I++){
       consolel.log(fibObj.next().value) //1,2,3,5,8.....
}
```

