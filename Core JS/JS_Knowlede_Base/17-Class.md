# Chapter 17 - Class

JavaScript is a `prototype-based` language, therefore its use of inheritance is also prototype-based. ECMAScript 5 uses
functions to make classes. ECMAScript 6 introduces the `class` keyword as syntactical sugar for class creation in
JavaScript.

## Creating an ES5 Class and an ES6 Class

```js
//ECMAScript 5 class
var Human = (
        function Human(name){
                 this.name = name;
} )
//assign new functions to the object that can be used with other instances of that objects.
Human.prototype.sayGoodNight = function(){
       return 'Say Goodnight ' + this.name;
}
var george = new Human('Gracie');
console.log(george.sayGoodNight());


//ECMAScript 6 class
class Greeting{
    constructor(name){
            this.name = name;
    }
    sayHello(){
            return 'Hellooo ' + this.name;
    } 
}

/*
Class declarations like in this example are not hoisted. Because of this, be sure to declare the class you want to use before trying to access it. 
Not doing so will return a ReferenceError.
*/
var yakko = new Greeting('Nurse!');
console.log(yakko.sayHello());
```

JavaScript uses what is called `prototypical inheritance` to provide access to methods and properties found in other
objects. _Each object contains a prototype object with a reference to another object up until an object’s prototype has
a null value._ At this point, you have reached the end of the chain and there are no other objects to inherit from.

```js
//ES5 Class Creation
function Show(name, network){
         this.name = name;
         this.network = network;
};
Show.prototype.getShowName = function getShowName(){
       return this.name;  //added to the Show prototype it now has access to it's properties.
};
Show.prototype.getShowNetwork = function getShowNetwork(){
       return this.network;
};
var gravityFalls = new Show('Gravity Falls', 'Disney XD');
console.log(gravityFalls.getShowName());  //returns Gravity Falls
console.log(gravityFalls.getShowNetwork()); //returns Disney XD

Show.prototype.getShowNetwork = function getShowNetwork(){
       return 'On My TV!';
};

console.log(gravityFalls.getShowNetwork()); //returns On My TV!
console.log(Show.prototype); //shows getShowName and getShowNetwork functions are now part of the Show prototype


//ES6 Class Creation
class MyTVShow{
    constructor(name, network){
          this.name = name;
          this.network = network;
    }
   getShowName(){
          return this.show;
}
   getShowNetwork(){
          return this.network;
} }
console.log(MyTVShow.prototype)
//shows getShowName and getShowNetwork functions are now part of the MyTVShow prototype.

```

## Extend and Super Keywords has usual functions

## Static method

Static methods do not need the class to be instantiated in order to use them.

```js
//Static Methods Are Called Directly from the Class
class Human{
        constructor(){
}
        static hasLegs(){
                 return 'Person has legs';
}
        static hasAmrs(){
                 return 'Person has arms';
} }

//don't need to create var human = new Human();
console.log(Human.hasLegs())  //returns Person has legs
console.log(Human.hasAmrs())  //returns Person has arms
```