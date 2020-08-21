/*
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
//Notice that our object actually has more properties than label, but the compiler only checks that at least the ones required are present and match the types required.
printLabel(myObj);

//this is a valid code - as you can see the argument to printLabel expects object which has label of type string
*/
/**
 * we didn’t have to explicitly say that the object we pass to printLabel implements this interface like we might have to in other languages.
 * Here, it’s only the shape that matters.
 *
 * @param {LabelledValue} labelledObj
 */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
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
let mySquare = createSquare({ color: "black" });
//You can construct a Point by assigning an object literal. After the assignment, x and y can’t be changed.
let p1 = { x: 10, y: 20 };
//p1.x = 5; // error!
//TypeScript comes with a ReadonlyArray<T> type that is the same as Array<T> with all mutating methods removed
let a = [1, 2, 3, 4];
let ro = a;
/*
ro[0] = 12; // error!
ro.push(5); // error!
ro.length = 100; // error!
a = ro; // error!       cant promote it to mutable array
*/
a = ro; //allowed by type assertion
//For function types to correctly type-check, the names of the parameters do not need to match. 
let mySearch;
//If you do not want to specify types at all, TypeScript’s contextual typing can infer the argument types
//so type bounding in this method arguments and return type is unnecessary
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
class Clock {
    constructor(h, m) { }
    setTime(d) {
        this.currentTime = d;
    }
}
let square = {}; //genrify that the object can only be of type square
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
/**
 *
 *
 * @class Control
 */
class Control {
}
class Button extends Control {
    select() { }
}
class TextBox extends Control {
    select() { }
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
//# sourceMappingURL=interfacesInTS.js.map