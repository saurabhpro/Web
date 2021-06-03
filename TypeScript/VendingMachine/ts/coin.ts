abstract class Coin {
  constructor(public value: number) {}

  abstract getImageUrl(): string;
}

class Dime extends Coin {
  constructor() {
    super(0.1);
  }

  getImageUrl() {
    return '../img/Dime.png';
  }
}

class Quarter extends Coin {
  constructor() {
    super(0.25);
  }

  getImageUrl() {
    return '../img/Quarter.png';
  }
}

class Half extends Coin {
  constructor() {
    super(0.5);
  }

  getImageUrl() {
    return '../img/Half.png';
  }
}

class Dollar extends Coin {
  constructor() {
    super(1);
  }

  getImageUrl() {
    return '../img/Dollar.jpg';
  }
}

export { Dime, Dollar, Half, Coin, Quarter };
