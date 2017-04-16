
var items = [
	{ name: 'Edward', value: 21 },
	{ name: 'Sharpe', value: 37 },
	{ name: 'And', value: 45 },
	{ name: 'The', value: -12 },
	{ name: 'Magnetic', value: 13 },
	{ name: 'Zeros', value: 37 }
];

//console.log(items.sort())	//doesn't work

const sortBy = (property) => {
	//returning a function(without evaluation)
	return (valA, valB) => {
		return valA[property] < valB[property] ? -1 : valA[property] > valB[property] ? 1 : 0
	}
}

//items.sort will automatically expect a compareFn which can accept two arguments A, B
console.log(items.sort(sortBy("name")))		//does work
console.log(items.sort(sortBy("value")))	//does work