
console.log('Testing the Functions in ECMA6');
var calculateTax = (value, percentValue) => { return value / 100 * (100 + percentValue) }
console.log(calculateTax(5000, 4));


console.log('Testing the High Order Functions');
var array = [1, 2, 3]
array.forEach(element => console.log(element))


console.log('Testing the caching for Functions Referential transparency ');
var longRunningFunction = (ip) => { //do long running tasks and return }
	var longRunningFnBookKeeper = { 2: 3, 4: 5 }
	//check if the key present in longRunningFnBookKeeper
	//if get back the result else update the bookkeeping object
	longRunningFnBookKeeper.hasOwnProperty(ip) ?
		longRunningFnBookKeeper[ip] :
		longRunningFnBookKeeper[ip] = longRunningFunction(ip)
