"use strict";

class Point {
    #x;
    #y;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    equals(point) {
        return this.#x === point.#x && this.#y === point.#y;
    }
}