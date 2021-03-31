"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
exports.cToF = (celsius) => {
    var cToFahr = celsius * (9 / 5 + 32);
    return cToFahr.toFixed(2) + ' \xB0F';
};
exports.fToC = (fahrenheit) => {
    var fToCel = (fahrenheit - 32) * 5 / 9;
    return fToCel.toFixed(2) + '\xB0C';
};
