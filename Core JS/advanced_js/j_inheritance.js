'use strict';

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//Note
Person.prototype.fullNameByPrototype = function () {
  return this.firstName + this.lastName;
};

function Professional(honor, firstName, lastName) {
  Person.call(this, firstName, lastName);

  this.honor = honor;
}

Professional.prototype = Object.create(Person.prototype); //this is how we add inheritance in pseudo classical inheritance in js

Professional.prototype.professionalName = function () {
  return this.honor + this.firstName + this.lastName;
};

var prof = new Professional('Dr', 'S', 'K');
console.log(prof.professionalName());
console.log(prof.fullNameByPrototype()); //not found if Professtional.prototype is not linked by Object.create(Person.prototype);
