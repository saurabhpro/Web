/*
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
//Notice that our object actually has more properties than label, but the compiler only checks that at least the ones required are present and match the types required. 
printLabel(myObj);

//this is a valid code - as you can see the argument to printLabel expects object which has label of type string
*/

//This is how its written more cleanly
interface LabelledValue {
    label: string;
}

/**
 * we didn’t have to explicitly say that the object we pass to printLabel implements this interface like we might have to in other languages.
 * Here, it’s only the shape that matters.
 *
 * @param {LabelledValue} labelledObj
 */
function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


/**
 * Optionals in an Interface
 *
 * @interface SquareConfig
 */
interface SquareConfig {
    color?: string;     //syntax for defining optional elements
    width?: number;     //when no value is provided to them its undefiend
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    //type cecking ensures that only the two propeties are allowed
    if (config.color) {
        newSquare.color = config.color;
    }

    console.log(config.width);

    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});


/**
 * The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property.
 * Variables use const whereas properties use readonly.
 *
 * @interface Point
 */
interface Point {
    readonly x: number;
    readonly y: number;
}

//You can construct a Point by assigning an object literal. After the assignment, x and y can’t be changed.

let p1: Point = {x: 10, y: 20};
//p1.x = 5; // error!

//TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
/*
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!       cant promote it to mutable array
*/

a = ro as number[]; //allowed by type assertion


/**
 *
 *
 * @interface SearchFunc
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}

//For function types to correctly type-check, the names of the parameters do not need to match. 
let mySearch: SearchFunc;
//If you do not want to specify types at all, TypeScript’s contextual typing can infer the argument types
//so type bounding in this method arguments and return type is unnecessary
mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
}


/**
 * Interfaces describe the public side of the class, rather than both the public and private side.
 *
 * @interface ClockInterface
 */
interface ClockInterface {
    currentTime: Date;

    setTime(d: Date);
}

class Clock implements ClockInterface {
    currentTime: Date;

    setTime(d: Date) {
        this.currentTime = d;
    }

    constructor(h: number, m: number) {
    }
}


/**
 * An interface can extend multiple interfaces, creating a combination of all of the interfaces.
 *
 * @interface Shape
 */
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};    //genrify that the object can only be of type square
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


/**
 *
 *
 * @class Control
 */
class Control {
    private state: any;
}

/**
 * Interfaces Extending Classes
 * When an interface type extends a class type it inherits the members of the class but not their implementations.
 * It is as if the interface had declared all of the members of the class without providing an implementation.
 *
 * Interfaces inherit even the private and protected members of a base class.
 *
 * This means that when you create an interface that extends a class with private or protected members,
 * that interface type can only be implemented by that class or a subclass of it.
 * This is useful when you have a large inheritance hierarchy, but want to specify that your code works with only
 * subclasses that have certain properties.
 * The subclasses don’t have to be related besides inheriting from the base class. For example:
 *
 * @interface SelectableControl
 * @extends {Control}
 */
interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control {
    select() {
    }
}

class TextBox extends Control {
    select() {
    }
}

/*
Error as select() can only be used by subclasses of Control defiend in the interface
Since state is a private member it is only possible for descendants of Control to implement SelectableControl. 
class Image {
    select() { }
}

class Location {
    select() { }
}
*/