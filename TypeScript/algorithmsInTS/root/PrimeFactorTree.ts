class PrimeFactorTree {
    /**
   * Method will return list of all primes for provided number.
   * For example for number 18 it should return following list of primes
   * [2, 3, 3].
   *
   * @module primes/prime-factor-tree
   * @param {Number} number - Number for which method will find all primes.
   * @returns {Array} List of available primes for provided number.
   *
   * @example
   * var primeFactorTree = require('path-to-algorithms/src/prime-factor-tree')
   * .primeFactorTree;
   *
   * console.log(primeFactorTree(18)); // [2, 3, 3]
   * console.log(primeFactorTree(600851475143)); // [71, 839, 1471, 6857]
   */
    static primeFactorTree(number: number) : Array<number>{
        var div = 2;
        var array:Array<number> = [];

        while (number > 1) {
            if (number % div === 0) {
                number /= div;

                array.push(div);
            } else {
                div += 1;
            }
        }

        return array;
    };
}

let primeFactorTree = PrimeFactorTree.primeFactorTree;
console.log(primeFactorTree(18)); // [2, 3, 3]
console.log(primeFactorTree(600851475143)); // [71, 839, 1471, 6857]