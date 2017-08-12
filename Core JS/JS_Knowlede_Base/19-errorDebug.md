

```js
//Two Types of Errors, One During Runtime, the Other User-Defined 
new Array(-1) //returns Uncaught RangeError: Invalid array length

//user defined error
console.log(new Error('this is a problem')); //returns Error: this is a problem(...)
```

## Different Types of Errors in JS

- EvalError: This is the result of an error with the eval() function. JavaScript does not throw this error anymore, but it retains it for compatibility.
- RangeError: This object is the result of a value not in the range of allowed values.
- ReferenceError: Happens when you try to use something like a variable that has not been defined yet. 
- SyntaxError: Sometimes called parsing errors, these happen when the runtime cannot parse the code. 
- TypeError: Happens when trying to access a method or property of an object that does not exist. 
- URIError: This error is thrown when the URI a function is using is malformed.

```js
//Different Types of Errors that Can Happen in JavaScript 
var evalMsg = new EvalError('This is an eval error');
console.log(evalMsg.message); //returns This is an eval error

new Array(-1);  //returns RangeError: Invalid array length
32.3333.toExponential(-1) //returns RangeError
434.2322.toFixed(-100) //return RangeError
var rangeMsg = new RangeError('This is a Range error');
console.log(rangeMsg.message); //returns This is a Range error

console.log(myVar); //returns Uncaught ReferenceError: myVar is not defined

window.alert( //return Uncaught SyntaxError: Unexpected end of input

var myObj = new Object();
console.log(myObj.causeError()) //returns Uncaught TypeError: myObj.causeError is not a function

decodeURIComponent('a%AFc'); //returns Uncaught URIError: URI malformed
```

## try/catch statement used for debugging.
```js
function checkStarShip(shipName){
        try{
            if(shipName !== 'Enterprise'){
                throw new Error('Wrong Ship');
            } 
        }catch(e){
            console.log(e);
            console.log(e.stack);   //displays call stack
            //throw(e); //rethrows errors
            console.log('Looking for Enterprise');
        }finally{
            console.log('Continue working with code');
        }
}
checkStarShip('TARDIS');

//returns
//Error: Wrong Ship
//Looking for Enterprise
//Continue working with code
```

## callback pattern and how to use it to find errors.
```js
function onSuccess(){
         console.log('You are Correct');
}
function onError(e){
         console.log(e.message);
}
function isFirstOfficer(name, onError, onSuccess){
         if(name === 'Spock'){
                  onSuccess();
         }else{
                  onError(new Error('Sorry, Wrong Officer'));
} }

isFirstOfficer('Scotty', onError, onSuccess);
isFirstOfficer('Spock', onError, onSuccess);
```
Using functions as arguments of other functions is possible because functions are `first-class objects` in JavaScript.
Because functions are first-class objects, they can be executed inside other functions. 
This type of thinking is known as `functional programming`. 
Functions can get executed depending on what is happening in the container function.

## User Defined Errors?
```js
class myCustomError extends Error{
        constructor(message){
                super(message)
        } 
}

var myCustomErrorInstance = new myCustomError('This is a Custom Error');
        console.log(myCustomErrorInstance.message);  //returns This is a Custom Error
        console.log(myCustomErrorInstance.stack);    //returns stack trace

```