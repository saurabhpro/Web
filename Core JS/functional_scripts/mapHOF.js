
let apressBooks = [
	{
		"id": 111,
		"title": "C# 6.0",
		"author": "ANDREW TROELSEN",
		"rating": [4.7],
		"reviews": [{ good: 4, excellent: 12 }]
	},
	{
		"id": 222,
		"title": "Efficient Learning Machines",
		"author": "Rahul Khanna",
		"rating": [4.5],
		"reviews": []
	},
	{
		"id": 333,
		"title": "Pro AngularJS",
		"author": "Adam Freeman",
		"rating": [4.0],
		"reviews": []
	},
	{
		"id": 444,
		"title": "Pro ASP.NET",
		"author": "Adam Freeman",
		"rating": [4.2],
		"reviews": [{ good: 14, excellent: 12 }]
	}
];

const filteredArray = (array, func) => {
	let resultArr = [];
	for (const val of array)
		func(val) ? resultArr.push(val) : undefined;

	console.log('filteredArray', resultArr);
	return resultArr;

}

const mappedArray = (array, func) => {
	let resultArr = [];
	for (const val of array)
		resultArr.push(func(val));

	//console.log('mappedArray', resultArr);
	return resultArr;
}

var resultOfFilter = filteredArray(apressBooks, (book) => book.rating[0] > 4.5);
var resultOfMap = mappedArray(resultOfFilter, (book) => { return { title: book.title, author: book.author } })

console.log('Result', resultOfMap);


