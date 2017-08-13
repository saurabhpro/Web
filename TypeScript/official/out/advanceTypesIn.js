//Intersection Types
//An intersection type combines multiple types into one. 
//For example, Person & Serializable & Loggable is a Person and Serializable and Loggable. 
//That means an object of this type will have all members of all three types.
//Union Types
/**
 * Takes a string and adds "padding" to the left.
 * If 'padding' is a string, then 'padding' is appended to the left side.
 * If 'padding' is a number, then that number of spaces is added to the left side.
 */
//function padLeft(value: string, padding: any) { //any is buggy here as it allows even boolean to pass compilation
function padLeft(value, padding) {
    if (typeof padding === "number") {
        //typeof type guards are recognized in two different forms: typeof v === "typename" and typeof v !== "typename", where "typename" must be "number", "string", "boolean", or "symbol".
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
padLeft("Hello world", 4); // returns "    Hello world"
function getSmallPet() {
}
let pet = getSmallPet();
pet.layEggs(); // okay
pet.swim(); // errors
//Type Guards
//A predicate takes the form "parameterName is Type"
function isFish(pet) {
    return pet.swim !== undefined;
}
function isNumber(x) {
    return typeof x === "number";
}
//typeof
//instanceof
//# sourceMappingURL=advanceTypesIn.js.map