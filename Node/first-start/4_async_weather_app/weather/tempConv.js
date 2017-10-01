const cToF = (celsius) => {
    var cToFahr = celsius * (9 / 5 + 32);
    return cToFahr.toFixed(2) + ' \xB0F';
}

const fToC = (fahrenheit) => {
    var fToCel = (fahrenheit - 32) * 5 / 9;
    return fToCel.toFixed(2) + '\xB0C';
}

module.exports = {
    cToF,
    fToC
}