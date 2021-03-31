"use strict";
var types;
(function (types) {
    // string
    let myName = 'Max';
    // myName = 28;
    // number
    let myAge = 27;
    // myAge = 'Max';
    // boolean
    let hasHobbies = false;
    // hasHobbies = 1;
    // assign types
    let myRealAge;
    myRealAge = 27;
    // myRealAge = '27';
    // array
    let hobbies = ["Cooking", "Sports"];
    hobbies = [100];
    //or
    let hobbies2;
    // hobbies = 100;
    // tuples
    let address = ["Superstreet", 99];
    // enum
    let Color;
    (function (Color) {
        Color[Color["Gray"] = 0] = "Gray";
        Color[Color["Green"] = 100] = "Green";
        Color[Color["Blue"] = 2] = "Blue"; // 2
    })(Color || (Color = {}));
    let myColor = Color.Blue;
    console.log(myColor);
    // any
    let car = "BMW";
    console.log(car);
    car = {brand: "BMW", series: 3};
    console.log(car);

    // functions
    function returnMyName() {
        return myName;
    }

    console.log(returnMyName());

    // void
    function sayHello() {
        console.log("Hello!");
    }

    // argument types
    function multiply(value1, value2) {
        return value1 * value2;
    }

    // console.log(multiply(2, 'Max'));
    console.log(multiply(10, 2));
    // function types
    let myMultiply;
    // myMultiply = sayHello;
    // myMultiply();
    myMultiply = multiply;
    console.log(myMultiply(5, 2));
    // objects
    let userData = {
        name: "Max",
        age: 27
    };
    // userData = {
    //     a: "Hello",
    //     b: 22
    // };
    // complex object
    let complex = {
        data: [100, 3.99, 10],
        output: function (all) {
            return this.data;
        }
    };
    let complex2 = {
        data: [100, 3.99, 10],
        output: function (all) {
            return this.data;
        }
    };
    // union types
    let myRealRealAge = 27;
    myRealRealAge = "27";
    // myRealRealAge = true;
    // check types
    let finalValue = 30;
    if (typeof finalValue === "number") {
        console.log("Final value is a number");
    }
})(types || (types = {}));
//# sourceMappingURL=app.js.map