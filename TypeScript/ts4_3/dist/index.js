'use strict';
let a = { name: 'Saurabh' };
console.log(a);
let b = 'my name is khan';
console.log(b);
b = 12345;
console.log(b);
let c = { id: '1', name: 'Khan', color: 'green' }; // WHATTTT!
console.log(c);
function isFish(pet) {
  return pet.swim !== undefined;
}
// Both calls to 'swim' and 'fly' are now okay.
let petx = getSmallPet();
if (isFish(petx)) {
  petx.swim();
} else {
  petx.fly();
}
function getSmallPet() {
  return {
    fly() {
      console.log('fly');
      return true;
    },
  };
}
//# sourceMappingURL=index.js.map
