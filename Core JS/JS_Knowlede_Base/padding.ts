/**
 * Method to pad a given input string
 * @param {String} inputString 
 * @param {number} [desiredLength=0] 
 * @param {String} [padinputString=' '] 
 * @param {number} [direction=-1] 
 * @returns {String} the string in desired padded format
 */
function pad(inputString: String, desiredLength: number = 0, padinputString: String = ' ', direction: number = -1): String {
    var repetition: number = (desiredLength - inputString.length) / padinputString.length;

    //pad right
    if (repetition && direction > 0) {
        return inputString + padinputString.repeat(repetition);
    }
    //padd left
    else if (repetition && direction < 0) {
        return padinputString.repeat(repetition) + inputString;
    }
    //pad left and right equally
    else if (repetition && direction === 0) {
        var left: number = Math.floor(repetition / 2),
            right: number = repetition - left;
        return padinputString.repeat(left) + inputString + padinputString.repeat(right);
    }
    return inputString;
}

console.log(pad('indent', 10));
console.log(pad('indent', 14));
console.log(pad('01', 12, '0'));
console.log('0x' + pad('61', 4, '0'));
console.log(pad('echo', 8, 'o', 1));
console.log(pad('trails off', 22, '.', 1));
console.log(pad('equal indent', 20, ' ', 0));
console.log(pad('double padded', 20, '-', 0));
