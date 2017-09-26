"use strict";
/*
//Re-write all this code using TypeScript and Class Features.

// Exercise 1
function Car(name) {
    this.name = name;
    this.acceleration = 0;

    this.honk = function() {
        console.log("Toooooooooot!");
    };

    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());

// Exercise 3
var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
*/
// Exercise 1 - Class
class Car {
    //if the argument to constructor argument is not public - we need a instance field
    constructor(name) {
        this.acceleration = 0;
        this.name = name;
    }
    honk() {
        console.log("Toooooooot!");
    }
    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);
// Exercise 2 - Inheritance
class BaseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
    }
}
class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
// Exercise 3 - Getters & Setters
class Person {
    constructor() {
        this._firstName = "";
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}
const person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
//# sourceMappingURL=excercises.js.map