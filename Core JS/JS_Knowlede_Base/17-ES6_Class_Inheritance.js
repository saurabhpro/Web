class Ship {
  constructor(type, name, color) {
    //variable declared here only, cant have multiple constructors
    this.name = name;
    this.type = type;
    this.color = color;
  }

  shipName() {
    return 'I am ' + this.name;
  }

  shipType() {
    return 'I am type: ' + this.type;
  }

  shipColor() {
    return 'My color is ' + this.color;
  }
}

class SpaceShip extends Ship {
  constructor(type, name, color) {
    super(type, name, color); //calls parent constructor
  }

  spaceShipName() {
    return super.shipName();
  }

  spaceShipType() {
    return super.shipType();
  }

  spaceShipColor() {
    return super.shipColor();
  }
}

const planetExpress = new SpaceShip(
  'Planet Express Ship',
  'Delivery  Ship',
  'Green'
);

console.log(planetExpress.spaceShipName()); //returns I am Planet Express Ship
console.log(planetExpress.shipType()); //return I am type: Delivery  Ship
console.log(planetExpress.spaceShipColor()); // returns My color is Green

console.log(planetExpress.color); // returns My color is Green "ALSO WORKS"

class Cookies {
  constructor() {
    this._typeOfCookie; //for these cases we need getter and setters, as
    //the underscore (_) is just the developer’s way to signaling to other developers not to access
    //this property directly.  It does not really keep this property private.
  }

  set cookieType(typeOfCookie) {
    this._typeOfCookie = typeOfCookie;
  }

  get cookieType() {
    return this._typeOfCookie;
  }
}

const myCookie = new Cookies();
myCookie.cookieType = 'Chocolate Chip'; //calls the setter method
console.log(myCookie.cookieType); //returns Chocolate Chip; calls getter
console.log(myCookie._typeOfCookie); //will work!
