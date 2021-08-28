// Private fields start with #. JavaScript makes sure we can only access those from inside the class.
// Protected fields start with _. That’s a well-known convention, not enforced at the language level. Programmers should only access a field starting with _ from its class and classes inheriting from it.

class CoffeeMachine {
  /**
   * # properties are compile time private
   */
  #waterAmount = 0;

  constructor(power) {
    this._power = power;
  }

  /**
   * it is a readonly property as there is no setter
   */
  get power() {
    return this._power;
  }

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;
    this.#waterAmount = value;
  }
}

// create the coffee machine
let machine = new CoffeeMachine(100);

machine.waterAmount = 100;
console.log(`Power is: ${machine.power}W`); // Power is: 100W

machine.power = 25; // Error (no setter)

// console.log(machine.#waterAmount); // Error
// SyntaxError: Private field '#waterAmount' must be declared in an enclosing class
