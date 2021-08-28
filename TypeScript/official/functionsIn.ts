//In TypeScript, we can also set a value that a parameter will be assigned if the user does not provide one, or if the user passes undefined in its place. These are called default-initialized parameters. Let’s take the previous example and default the last name to "Smith".

function buildName(firstName: string, lastName = 'Smith') {
  return firstName + ' ' + lastName;
}

let result1 = buildName('Bob'); // works correctly now, returns "Bob Smith"
let result2 = buildName('Bob', undefined); // still works, also returns "Bob Smith"
//let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result4 = buildName('Bob', 'Adams'); // ah, just right

//in functions ... is called REST parameters
function buildName2(firstName: string, ...restOfName: string[]) {
  return firstName + ' ' + restOfName.join(' ');
}

let deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function () {
    // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
    //Arrow functions capture the this where the function is created rather than where it is invoked:
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  },
};

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert('card: ' + pickedCard.card + ' of ' + pickedCard.suit);
