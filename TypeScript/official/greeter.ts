//In TypeScript, two types are compatible if their internal structure is compatible. 
//This allows us to implement an interface just by having the shape the interface requires, without an explicit implements clause.

/**
 * This is only a type bound struct, there is nothing like this in js 
 * so its only purpose is to provde type checking here
 * 
 * @interface Person
 */
interface Person {
    //interface that describes objects that have a firstName and lastName field
    firstName: string;
    lastName: string;
}

/**
 * This is slightly more compact than ES6 classes (see it's JS)
 * 
 * @class Student
 */
class Student {
    fullName: string;
    //the use of public on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Saurabh", lastName: "Kumar" };

//The user is cmpatible to the interface as the names of the keys match, and as said "hence both are compatible"
document.body.innerHTML = greeter(user);