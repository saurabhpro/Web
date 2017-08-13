//Boolean
let isDone = false;
//Number
//As in JavaScript, all numbers in TypeScript are floating point values. These floating point numbers get the type number. 
//String
// You can also use template strings, which can span multiple lines and have embedded expressions. 
// These strings are surrounded by the backtick/backquote (`) character, 
// and embedded expressions are of the form ${ expr }.
let fullName = `Bob Bobbington`;
let age = 37;
let sentence = `
                        Hello, my name is ${fullName}.
                        I'll be ${age + 1} years old next month.
                        `;
//Array
//TypeScript, like JavaScript, allows you to work with arrays of values. Array types can be written in one of two ways. In the first, you use the type of the elements followed by [] to denote an array of that element type:
let list = [1, 2, 3];
//The second way uses a generic array type, Array<elemType>:
let list2 = [1, 2, 3];
//Tuple
//Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:
// Declare a tuple type
let x33;
// Initialize it
x33 = ["hello", 10]; // OK
// Initialize it incorrectly
//x = [10, "hello"]; // Error
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
//By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color2.Green;
//Or, even manually set all the values in the enum:
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
let c3 = Color3.Green;
let colorName = Color3[2];
alert(colorName);
//ANY
// You might expect Object to play a similar role, as it does in other languages. But variables of type Object only allow you to assign any value to them - you can’t call arbitrary methods on them, even ones that actually exist:
let notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
let prettySure = 4;
//prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
let list4 = [1, true, "free"];
list4[1] = 100;
//void
//opposite of any
let unusable = undefined;
//null & undfined
let u = undefined;
let n = null;
//never
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
//Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” 
//A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data. 
//It has no runtime impact, and is used purely by the compiler. 
//TypeScript assumes that you, the programmer, have performed any special checks that you need.
//Type assertions have two forms. One is the “angle-bracket” syntax:
let someValue = "this is a string";
let strLength = someValue.length;
//And the other is the as-syntax: [preffered]
let someValue2 = "this is a string";
let strLength2 = someValue2.length;
//# sourceMappingURL=basicTypesInTS.js.map