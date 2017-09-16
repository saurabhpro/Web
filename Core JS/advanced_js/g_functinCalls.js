//functions are special objects having arguments, length, name, caller properties


//"use strict";     //in the new ECMA Sctirct mode this by default is "undefined"

function sk() {
    console.log(this);
};

console.log(sk.name);

function sk(param1, param2) {
    console.log(this);
};

sk.moo = 1;

console.log(sk.arguments); //cannot be used outside of fucntion scope in strict mode and in nonstrict prints "null"
console.log(sk.toString());

//now why use sk.call()
sk.call(); //prints the global context
sk.call(1); //prints the object of type Number
sk.call({});


var sk = {
    checkThis: function () {

        function checkOther() {
            console.log(this); //in not strict enviorment - this would point to window but in ECMA6 this is the current scope
        }

        checkOther.call(this); //passign this will provide this of the object  sk to the called method

    }
};

//sk.checkThis(); //equivalent to sk.checkThis.call(sk);

sk.checkThis.call(); //in non stirct passes window object as this



function newname(b, c, d) {
    console.log(arguments);
    console.log(this);
    console.log(b);
    console.log(c);
    console.log(d);
}


newname.call(1, 2, 3, 4); //1st argument is the object thats required for the object instance

newname.apply(1, [2, 3, 4]); //same as before, only difference is that - > if your code takes variable number of args -> use apply

function sum() {
    var total = 0;
    for (var a of arguments) {
        total += a;
    }

    return total;
}

var c = sum.call(null, 1, 2, 3);
console.log("sum " + c);

var things = [1, 2, 3, 4, 5];
//but if say you want variable number of arguments - > we can tpass variable
var c2 = sum.apply(null, things);
console.log(c2);

"use strict";

var a = function () {
    console.log("val " + this);
};
a();

var a = function () {
    console.log("val " + this);
}.bind( /*value of this*/ 1); //locked the value of this for everywhere
//bind doesnt work when function declaration but function expression v = function(){}.bind()
//same as a = a.bind(1);
a();

var a = {
    func: a
}

a.func();



var sk = {
    checkThis: function () {

        var checkOther = function () {
            console.log(this);
        }.bind(this); // bind with current object this

        checkOther();

    }
};

sk.checkThis();