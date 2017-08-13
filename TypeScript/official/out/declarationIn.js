function f(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
f(true); // returns '10'
f(false); // returns 'undefined'
//var declarations are accessible anywhere within their containing function, module, namespace, or global scope 
//These scoping rules can cause several types of mistakes. One problem they exacerbate is the fact that it is not an error to declare the same variable multiple times:
function sumMatrix(matrix) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        //check i
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
//Maybe it was easy to spot out for some, but the inner for-loop will accidentally overwrite the variable i because i refers to the same function-scoped variable.
//Variable capturing quirks
//Take a quick second to guess what the output of the following snippet is:
for (var i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i);
} //OUTPUT: 10 10 10 10 10 10 10 10 10 10 ??? 
//setTimeout will run a function after some number of milliseconds, but only after the for loop has stopped executing; By the time the for loop has stopped executing, the value of i is 10. 
//So each time the given function gets called, it will print out 10!
//let - uses what some call lexical-scoping or block-scoping.
//Re-declarations and Shadowing
//With var declarations, we mentioned that it didn’t matter how many times you declared your variables; you just got one.
function f(x) {
    var x;
    var x;
    if (true) {
        var x;
    }
}
//In the above example, all declarations of x actually refer to the same x, and this is perfectly valid. This often ends up being a source of bugs. Thankfully, let declarations are not as forgiving.
let x = 10;
let x = 20; // error: can't re-declare 'x' in the same scope
//const declarations
//const declarations are another way of declaring variables.
const numLivesForCat = 9;
//They are like let declarations but, as their name implies, their value cannot be changed once they are bound. In other words, they have the same scoping rules as let, but you can’t re-assign to them.
//const is only applied on variables and not properties
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
};
// Error
kitty = {
    name: "Danielle",
    numLives: numLivesForCat
};
// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;
//# sourceMappingURL=declarationIn.js.map