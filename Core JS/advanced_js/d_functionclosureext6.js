"use strict";

var foo = [];
for (var i = 0; i < 10; i++) {
    foo[i] = function () {
        return i;
    }
}

console.log(foo[0]());
console.log(foo[1]());
console.log(foo[9]());