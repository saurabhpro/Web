let user = { name: 'John' };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
export { user };

////////////////////////////////////
// define properties
////////////////////////////////////
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(JSON.stringify(descriptor, null, 2));
/* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */

Object.defineProperty(user, 'color', {
  value: 'green',
  writable: false,
});

console.log(user);

try {
  user.color = 'blue';
  // throws an error in strict mode
} catch (error) {
  console.error(error);
}

console.log(user.color);
// expected output: green

////////////////////////////////////
// feild override
////////////////////////////////////
class Animal {
  name = 'animal';

  constructor() {
    console.log(this.name); // (*)
  }
}

class Rabbit extends Animal {
  name = 'rabbit';
}

new Animal(); // animal
new Rabbit(); // animal
