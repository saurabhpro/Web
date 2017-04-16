
var func = () => "Simple Function";
console.log(func());

var simpleFn = () => { //function scope
	if (true) {
		let a = 1; //only this { } block scope
		var b = 2;
		console.log(a)
		console.log(b)
	}
	console.log(b) //function scope
	console.log(a) //function scope fails - Uncaught ReferenceError: a is not defined
}
simpleFn();
