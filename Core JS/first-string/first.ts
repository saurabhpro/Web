const num1 = 1.45;

const num2 = new Number(1.45);

console.log(typeof num1); // prints out number
console.log(typeof num2); // prints out object”


const sentence = 'This is one sentence. This is a sentence with a list of items:' +
	'cherries, oranges, apples, bananas. That was the list of items.';

const start = sentence.indexOf(':');

const end = sentence.indexOf('.', start + 1);

const fruits = sentence.substring(start + 1, end).split(',');

const fruits2 = sentence.substr(start + 1, end - (start + 1)).split(/\s*,\s*/);

console.log(fruits);
console.log(fruits2);

//callback
fruits.forEach(function (elmnt, indx, arry) {
	arry[indx] = elmnt.trim();
});

console.log(fruits);
//or


const searchString = "Now is the time and this is the time and that is the time";
const pattern = /t\w*e/g;

let matchArray: RegExpExecArray | null;

let str = "";

// check for pattern with regexp exec, if not null, process
while (matchArray = pattern.exec(searchString)) {
	str += "at " + matchArray.index + " we found " + matchArray[0] + "\n";
}
console.log(str);
