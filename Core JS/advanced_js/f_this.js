console.log(this); //points to global window object

this.sk = 1; //this points to window hence both will output the same

console.log(this.sk);
console.log(window.sk);
console.log(sk); //searches for and finds sk in global scope


//* still points at global object
function checkThis() {
    console.log(this);
}

checkThis();


/** new object scope*/
var sk = {
    checkThis: function () {
        console.log(this); //this 
    }
};

sk.checkThis();
console.log(sk); //generally it'd seem this points to the object -> the fn is enclosed in

// so 
var newFunction = sk.checkThis;
//now newFucntion is in window scope and hence 
newFunction(); //in not strict enviorment - this would point to window but in ECMA6 this is the current scope


var sk = {
    checkThis: function () {
        "use strict";

        var self = this; //make a copy of this -> thereby stablizing it
        console.log(this); //this 

        function checkOther() {
            this.moo = 1; //sets it window object
            console.log(this); //in not strict enviorment - this would point to window but in ECMA6 this is the current scope
        }

        checkOther(); //since this is called without any object context

        console.log(this.moo); //this is pointing to the checkThis object - > so no moo found - in strict it triggers error
    }
};

sk.checkThis();