interface Move {
    source: string | number;
    goal: string | number;
}


class TowerOfHanoi {

    private static arresult: Array<Move> = [];

    /**
     * Returns all movements needed to solve Hanoi Tower problem.
     *
     * @public
     * @module others/hanoi
     *
     * @example
     *
     * var hanoi = require('path-to-algorithms/src/others/hanoi').hanoi;
     * var movements = hanoi(3, 'a', 'b', 'c');
     *
     * // Move a to c
     * // Move a to b
     * // Move c to b
     * // Move a to c
     * // Move b to a
     * // Move b to c
     * // Move a to c
     * movements.forEach(function (move) {
     *   console.log('Move', move[0], 'to', move[1]);
     * });
     *
     * @param {Number} count Count of the plates/stones.
     * @param {String|Number} source Identifier of the 1st peg.
     * @param {String|Number} source Identifier of the 2nd peg.
     * @param {String|Number} source Identifier of the 3rd peg.
     * @return Array which contains all the moves required
     * in order to place all the plates onto the last peg.
     */
    static hanoi(count: number, source: string | number, intermediate: string | number, goal: string | number): Array<Move> {
        if (count === 1) {
            this.arresult.push({source: source, goal: goal});
        } else {
            this.hanoi(count - 1, source, goal, intermediate);
            this.arresult.push({source: source, goal: goal});
            this.hanoi(count - 1, intermediate, source, goal);
        }
        return this.arresult;
    }

}

let movements = TowerOfHanoi.hanoi(3, 'a', 'b', 'c');
movements.forEach(
    (move) => {
        console.log('Move', move.source, 'to', move.goal);
    }
);
/*
movements = TowerOfHanoi.hanoi(3, 55, 66, 77);
movements.forEach(
    (move) => {
        console.log('Move', move.source, 'to', move.goal);
    }
);*/