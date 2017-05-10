function pad(inputString, desiredLength = 0, padinputString = ' ', direction = -1) {
    var repetition = (desiredLength - inputString.length) / padinputString.length;
    if (repetition && direction > 0) {
        return inputString + padinputString.repeat(repetition);
    }
    else if (repetition && direction < 0) {
        return padinputString.repeat(repetition) + inputString;
    }
    else if (repetition && direction === 0) {
        var left = Math.floor(repetition / 2),
            right = repetition - left;
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
