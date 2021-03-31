//"use strict";
var t = true;
var code = "var t = false";
eval(code);
console.log(t);

/**
 with strict
 true

 without strict
 false

 Even though we redefine name when we eval(code) since we are un use strict mode the effects are not leaked out of the eval block.
 */