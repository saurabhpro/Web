var Person = {
  //Method1
  init: function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    return this;
  },
  fullNameByPrototype: function () {
    return this.firstName + this.lastName;
  },
};

var sk = Object.create(
  Person,
  /*Method 2*/ {
    firstName: {
      value: 's',
    },
    lastName: {
      value: 'k',
    },
  }
);

//sk.init("s", "k");    //method 1
console.log(sk.fullNameByPrototype());

/*Method 3*/
function PersonFactory(firstName, lastName) {
  var person = Object.create(Person);
  person.firstName = firstName;
  person.lastName = lastName;
  return person;
}

var sk = PersonFactory('a', 'k');

console.log(sk.fullNameByPrototype());

// What does the below code print out?
var Device = {
  kind: 'Music Player',
};

var AppleProduct = Object.create(Device, {
  name: 'iPod',
});

var purchase = Object.create(AppleProduct);
console.log(purchase.name);

/*
The second param to the Object.create function is an object literal that described the properties we want to create on the object. 
So the value should be something like {name: { value: 'iPod' }} and not {name:'iPod'}
*/
