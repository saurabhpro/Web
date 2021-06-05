// https://javascript.info/static-properties-methods#statics-and-inheritance

class Triple {
  static customName = 'Tripler';
  static description = 'I triple any number you provide';
  static calculate(n = 1) {
    return n * 3;
  }
  static makeSomeNoise() {
    return 'raise the roof';
  }
}

class SquaredTriple extends Triple {
  static longDescription;
  static description = 'I square the triple of any number you provide';
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(Triple.description); // 'I triple any number you provide'
console.log(Triple.calculate()); // 3
console.log(Triple.calculate(6)); // 18

const tp = new Triple();

console.log(SquaredTriple.description); // 'I square the triple of any number you provide'
console.log(SquaredTriple.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(SquaredTriple.longDescription); // undefined
console.log(SquaredTriple.customName); // 'Tripler'

// this shows unlike java the static methods are inherited
console.log(SquaredTriple.makeSomeNoise()); // 'raise the roof'
console.log();

// This throws because calculate() is a static member, not an instance member.
tp.calculate(); // 'tp.calculate is not a function'
