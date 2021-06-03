# Chapter - 20

## Simple Regular Expression

```js
//regular expression literals
var companyBio =
  'Twitter is an online social networking service that enables users to send and read short 140-character messages called "tweets".';
var simplePattern = /(twitter)/gi;

var simplePatternConstructor = new RegExp(simplePattern);
console.log(simplePatternConstructor.exec(companyBio));
//returns ["Twitter", "Twitter", index: 0, input: "Twitter is an online social networking service tha...ead short 140-character messages called "tweets"."]
```

Flags or modifiers customize a regular expression to give it extra functions while it is performing a search. If you
need to search multiple lines or find a word regardless of its case, a flag will help you perform that type of search.

- Global (g): This will tell the engine not to stop after the first match has been found.
- Multiline (m): This will force the (^) hat or carrot and the dollar sign ($) to match the beginning and end of each
  line in a multiline document.
- Case insensitive (i): This flag will have the search ignore the case of the string being searched.
- Ignore whitespace (x): This flag will ignore all the whitespace inside a search.
- Unicode (u): Strings are treated at UTF-16.
- Sticky (y): This feature has a Boolean value where a search can begin not from the beginning, but from the last index
  that was found.

## Searching for Characters Even if There Are Special Characters in the Search

```js
var words =
  'Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks.';
words +=
  '\nMoff mon darth solo jabba yavin darth. skywalker endor k-3po mon fett binks.';

var multiLineExpression = /(darth\.)/gi; //a match group that includes the period
var multiLineResult = multiLineExpression.exec(words);

console.log(multiLineResult);
//returns ["darth.", "darth.", index: 32, input: "Moff mon darth solo jabba yavin darth. Skywalker e...avin darth. skywalker endor k-3po mon fett binks."]
```

When looking for other special characters, you can search for

- digits (\d),
- whitespace (\s),
- and alphanumeric letters with digits (\w).

You can also search for

- non-digits (\D),
- non-whitespace (\S),
- and any non-alphanumeric characters (\W).

## or conditionals

The pipe (|), which is also used in if statements, can be used to add a logical condition to a regular expression.

## Search for Characters in a Certain Range

[ fromhere - tillhere ]

## Anchors

```js
var startAnchor = /^M/;
var multiLineAnchor = /^M/m;
var endOfLineAnchor = /binks.$/gm;

var firstInstanceAnchor = /\ar/; //Using \ar will find the first instance of “ar” in the first line. If the gm modifiers are added, it would return every instance of “ar” in every line.

var startOrEndAnchor = /^darth|binks.$/;
```

## Matching Quantifiers

Quantifiers tell the engine how many instances of a character must exist in order for a match to be found.

```js
Quantifiers Can Be Greedy, Docile, Lazy, and Helpful
var ipsumString = 'Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks.';
ipsumString += 'Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks.';

var greedyQuantifier = /b+/;
var docileQuantifier = /.*k-/;
var lazyQuantifier = /jabba*?/;
var helpfulQuantifier = /.*?yavin/;

console.log(greedyQuantifier.exec(ipsumString)); //returns bb from the first instance of jabba
console.log(docileQuantifier.exec(ipsumString)); //returns Moff mon darth solo jabba yavin darth. Skywalker endor k-
console.log(lazyQuantifier.exec(ipsumString)); //returns jabb
console.log(helpfulQuantifier.exec(ipsumString)); //returns Moff mon darth solo jabba yavin

```

**Quantifiers can be broken down into different categories; here are a few of them:**

- Greedy: This will tell the engine to match as many instances of the pattern as possible. Using a plus sign (+) as part
  of the expression will make the expression greedy. In this instance, you will return a result if the engine can find a
  match of one or more. We return bb from the first instance of jabba.

- Docile: Using the dot (.), the expression starts out greedy, matching any characters except a new line (\n). The
  asterisk (\*) will start to give back characters as needed. So it starts at the beginning of the line (the far left)
  and selects the entire line. Then it will give characters up from the right of the line until there is a match. If the
  k was the only character, then the period and s would be given up (.s in binks.). Adding the dash (-) gives up all the
  characters from the right up to the dash. The search will return Moff mon darth solo jabba yavin darth. Skywalker
  endor k-‘ and leave ‘3po mon fett binks.

- Lazy: Sometimes called reluctant, this tries to match as few items as needed. Using a question mark (?) will turn an
  expression lazy. This expression will start looking for the first instance of jabb in jabba. Because the last ‘a’ is
  followed by the asterisk (\*) and question mark (?), the search gives up the last character.

- Helpful: Similar to the last example. This is also a lazy type of search. The search will return between zero and
  unlimited results, but run as few times as possible. This search starts at the left and will expand up to the word
  yavin.

## Capture Groups?

It is possible to group information for further processing using parentheses. You can create a subpattern and capture it
as a group. The first example creates a capture group. This group will capture any characters except a newline character
because of the dot (.). Then it will act greedy by using the asterisk (\*) and capture between zero and unlimited amount
of results. Outside the parentheses, we now start to narrow down the search and match the period (.) and the letters
“pdf” exactly. The result is that the search will ignore everything and focus on the filename, excluding the extension.
The other example will do the same thing; however, the extension is part of the group. This will make the engine include
the file extension.

```js
var ipsumString =
  'Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks.';
ipsumString +=
  'Moff mon darth solo jabba yavin darth. Skywalker endor k-3po mon fett binks. file_record_transcript.pdf';

var groupOfFilesNoExtention = /(.*)\.pdf/;
var groupOfFilesWithExtention = /(.*\.pdf)/;

console.log(groupOfFilesNoExtention.exec(ipsumString)); //returns file_record_transcript
console.log(groupOfFilesWithExtention.exec(ipsumString)); //returns file_record_transcript.pdf
```

## lookaheads

```js
//Using a Lookahead to Find the Characters 1701
var textWithNumbers = '1701-D, 1701';

var noLetterLookaHead = /1701(?!-D)/; //returns the second set ignoring other characters
var withLetterLookaHead = /1701(?=-D)/; //only returns the version with -D at the end

console.log(noLetterLookaHead.exec(textWithNumbers));
console.log(withLetterLookaHead.exec(textWithNumbers));
```

Lookaheads will find a match if the string is or isn’t followed by the pattern.

The first example has a pattern where the characters (-D) are not followed by the numbers 1701. It would ignore the
first instance and go straight to the second instance.

The other example will only return the version that contains (-D) at the end.

In both instances, the search is for the number, but only when that the number is followed by the pattern (-D).
