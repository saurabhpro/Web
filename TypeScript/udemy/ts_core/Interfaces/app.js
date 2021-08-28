'use strict';
var InterfaceX;
(function (InterfaceX) {
  function greet(person) {
    console.log('Hello, ' + person.firstName);
  }

  function changeName(person) {
    person.firstName = 'Anna';
  }

  const person = {
    firstName: 'Max',
    hobbies: ['Cooking', 'Sports'],
    greet(lastName) {
      console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    },
  };
  // greet({firstName: "Max", age: 27});
  changeName(person);
  greet(person);
  person.greet('Anything');

  class Person {
    constructor(theName, theTitle) {
      this.firstName = theName;
      this.lastName = theTitle;
    }

    greet(lastName) {
      console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    }
  }

  const myPerson = new Person('Maximilian', 'Anything');
  greet(myPerson);
  myPerson.greet(myPerson.lastName);
  let myDoubleFunction;
  myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
  };
  console.log(myDoubleFunction(10, 20));
  const oldPerson = {
    age: 27,
    firstName: 'Max',
    greet(lastName) {
      console.log('Hello!');
    },
  };
  console.log(oldPerson);
})(InterfaceX || (InterfaceX = {}));
