'use strict';

let foo = [];
for (let i = 0; i < 10; i++) {
  foo[i] = function () {
    return i;
  };
}

console.log(foo[0]());
console.log(foo[1]());
console.log(foo[9]());

/*
////////////////////////////////////////////////////////////////
 with var
////////////////////////////////////////////////////////////////
 saurabh.kumar@C02D70TBMD6N Core JS % node advanced_js/d_functionclosureext6.js 
10
10
10

////////////////////////////////////////////////////////////////
with lets
////////////////////////////////////////////////////////////////
saurabh.kumar@C02D70TBMD6N Core JS % node advanced_js/d_functionclosureext6.js
0
1
9
saurabh.kumar@C02D70TBMD6N Core JS % 
*/
