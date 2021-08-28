type Human = {
  name: string;
};

let a: Human = { name: 'Saurabh' };
console.log(a);

type ID = number | string;
let b: ID = 'my name is khan';
console.log(b);
b = 12345;
console.log(b);

/**
 * Here if we redclare the interface it adds props but the existing props must have same type the existing properties
 */
interface NewHuman {
  id: string;
  name: string;
  race?: number;
}
interface NewHuman {
  // id: number; ERROR as type is different
  color: string;
}

let c: NewHuman = { id: '1', name: 'Khan', color: 'green' }; // WHATTTT!
console.log(c);

// type predicates
// “ A predicate takes the form parameterName is Type, where parameterName must be the name of a parameter from the current function signature.”
type Fish = {
  swim(): boolean;
};
type Bird = { fly(): boolean };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Both calls to 'swim' and 'fly' are now okay.
let petx = getSmallPet();

if (isFish(petx)) {
  petx.swim();
} else {
  petx.fly();
}
function getSmallPet(): Bird {
  return {
    fly() {
      console.log('fly');
      return true;
    },
  };
}

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
