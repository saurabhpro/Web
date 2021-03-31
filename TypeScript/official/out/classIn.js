//Readonly modifier
//You can make properties readonly by using the readonly keyword. Readonly properties must be initialized at their declaration or in the constructor.
class Octopus {
    constructor(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
}

let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit"; // error! name is readonly.
//Parameter properties
//Parameter properties let you create and initialize a member in one place. Here’s a further revision of the previous Octopus class using a parameter property:
class Octopus2 {
    constructor(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
}

//Parameter properties are declared by prefixing a constructor parameter with an accessibility modifier or readonly,
//or both. Using private for a parameter property declares and initializes a private member; likewise, the same is done for public, protected, and readonly.
//Accessors
//accessors with a get and no set are automatically inferred to be readonly.
let passcode = "secret passcode";

class Employee {
    get fullName() {
        return this._fullName;
    }

    set fullName(newName) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        } else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith"; //calls the set fullName internally, is setter is not explicit - its this.a = a type
if (employee.fullName) {
    console.log(employee.fullName);
}
//Abstract Classes
//Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly. 
//Unlike an interface, an abstract class may contain implementation details for its members. 
//The abstract keyword is used to define abstract classes as well as abstract methods within an abstract class.
class Animal {
    move() {
        console.log("roaming the earth...");
    }
}

//Using a class as an interface
//As we said in the previous section, a class declaration creates two things: a type representing instances of the class and a constructor function. Because classes create types, you can use them in the same places you would be able to use interfaces.
class Point4 {
}

let point3d = {x1: 1, y2: 2, z: 3};
//Generic Classes
//A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.
class GenericNumber {
}

let myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
//# sourceMappingURL=classIn.js.map