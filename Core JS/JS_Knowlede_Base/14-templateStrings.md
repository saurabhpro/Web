# Chapter 14 - Template Strings
Template literals use backticks. This is similar to using quotes to work with a string; 
however, if you use single or double quotes you cannot add expressions to the template literal.

Expressions are placeholders that will display a value when rendered. Can be variable or function().
Expressions are defined by using a dollar sign and curly braces `${expression}`.

## Tagged Template Function
```js
function countdown(stringLiteralArray, ...values){
       console.log(stringLiteralArray); //returns full array
       console.log(stringLiteralArray[1]); //returns Mississippi
       console.log(values); //returns array of values
       console.log(values[0]);  //returns 1
       console.log(values[1]);  //returns 2
  let fullSentance = values[0] + stringLiteralArray[1] + values[1] + stringLiteralArray[2];
  return fullSentance;
}

let one = 1;
let two = 2;

let results = countdown `${one} Mississippi ${two} Mississippi`;

console.log(results); //returns 1 Mississippi 2 Mississippi
```

Tagged template functions allow you to take a template literal and its values as its parmeters.

## Using Line Breaks with Template Literals
```js
var seriesOfWords = ' this is line one\n this is line two\n this is line three';
console.log(seriesOfWords);
var temp = `
           one
two
three `
console.log(temp);//as shown
```

## Returning a String with the Raw Property
```js
function rawWithVars(stringArray, ...values){
       console.log(stringArray.raw)     //???
       console.log(stringArray.raw[2])  //returns Jones\n
       console.log(stringArray[2]) //returns Jones
}
let name1 = 'Luke';
let name2 = 'Jessica';
let name3 = 'Danny';
let name4 = 'Matt';
rawWithVars `${name1} Cage\n ${name2} Jones\n ${name3} Rand\n ${name4} Murdock`;
```
When using a tagged template function, the first parameter is the string that contains a raw property. 
Normally this property gives you an array of string literals. 

When using the `raw` property, you get an array with values exactly as they are in the template literal. 
In the example, a line break has been added to each name. When using the raw property, 
they are printed just as they were put into the template literal.


