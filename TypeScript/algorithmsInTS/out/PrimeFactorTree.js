"use strict";

class PrimeFactorTree {
    static primeFactorTree(number) {
        var div = 2;
        var array = [];
        while (number > 1) {
            if (number % div === 0) {
                number /= div;
                array.push(div);
            } else {
                div += 1;
            }
        }
        return array;
    }
    ;
}

let primeFactorTree = PrimeFactorTree.primeFactorTree;
console.log(primeFactorTree(18));
console.log(primeFactorTree(600851475143));
//# sourceMappingURL=PrimeFactorTree.js.map