# Chapter - 6

### Creating Instances of the Date Object

`new Date();`

The quickest way is to pass a string representing the date. The value should be able to be in a format that
the `Date.parse()` can recognize.

JavaScript does not always format the date exactly the same in every browser. Some recommendations would be:

- If you add hours, also add minutes, because not all browsers will parse with just hours.
- Milliseconds seem to only get parsed in Chrome.
- If possible, use the `YYYY/MM/DD` format.
- Hyphens (-) work best in WebKit browsers but are trouble in Firefox and IE; use slashes (/) as an alternative.
- Make sure the year is four numbers. For example, passing ‘1/1/16’ returns 1916-01- 01 as the date in Firefox and IE.
- Using UTC time works in more recent browsers, but may not be supported in older browsers. IE 9, for example, would not
  parse it correctly.

```js
var now = new Date(); //returns todays date and time
console.log(now.getDate()); //returns the day of the month from 1 to 31 console.log(now.getDay()); //returns the day of the week its zero based like an array 0 - 6; console.log(now.getFullYear()); //returns the current year
console.log(now.getHours()); //returns hours from 0-23
console.log(now.getMonth()); //return month from 0-11
//time information
console.log(now.getSeconds()); //returns seconds from 0-59
console.log(now.getTime()); //returns the amount of milliseconds since the first of January 1970

if (date1.getTime() == date2.getTime()) {
  console.log('date are the same');
}
```

## figure out the offset between UTC and local time.

```js
var offSet = currentDate.getTimezoneOffset() / 60; converts minutes to hours
console.log(offSet);
//check if we are on daylight savings time
var today = new Date();
function isDST(){
        var jan = new Date(today.getFullYear(), 0, 1);
        var jul = new Date(today.getFullYear(), 6, 1);
        return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
}
if(isDST() != today.getTimezoneOffset()){
        console.log('On DST');
}else{
        console.log('Not On DST');
}
```

The example creates two date objects. The first of the year and the first of July. These two dates should return
different offsets.

For example, New York returns -5 normally and -4 during daylight savings time. To figure out if you are currently on
daylight savings time, you can compare the current local time offset with the larger of the two date objects by
returning the larger number using the `max()` method. This is why it returns the larger of the two offsets. If the
function returns the local offset and the number and they are different, then you are on daylight savings time.
