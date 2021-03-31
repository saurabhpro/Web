var animal = {
    kind: 'human'
};

//console.log(animal);

/*

in __proto__ objet of the object
constructor
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toStirng
valueOf
*/

//var sk = {};
//sk.__proto__ = animal;    //MECHANISM 1 to create object

//or use Object.create(...);
var sk = Object.create(animal, /*default propertiesObjects too can be passed*/ {
    food: {
        value: "mango"
    }
});

console.log(sk.kind);

console.log("animal.isPrototypeOf(sk)", animal.isPrototypeOf(sk));

sk.kind = 'baaz'; //dynamic   //sets creates local object version for sk- > so not affecting the animal
console.log(sk.kind);
console.log(animal.kind); //prints human