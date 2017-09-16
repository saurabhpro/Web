console.log((function f(n) {
    return ((n > 1) ? n * f(n - 1) : n)
})(4));
/*This is an IIFE that actually performs a factorial, so 4! which is 24*/

(function (x) {

    return (function (y) {

        console.log(x);

    })(2)

})(1);
/*Javascript searches the functions outer scope and in there it will find x and the value of x is 1 since that is what was passed in through the IIFE.*/

// What will be the output of first console.log in the code below?

var salary = "1000$";

(function () {

    console.log("Original salary was " + salary);

    var salary = "5000$";

    console.log("My New Salary " + salary);

})();
/*The var salary in the IIFE is hoisted to the top of the function scope, so that means that salary is set to undefined by the time the first console.log is run*/