class LevenshteinDistance {

    private static calculateDistance(s: string, ls: number, t: string, lt: number): number {
        if (ls === 0) {
            return lt;
        }
        if (lt === 0) {
            return ls;
        }
        var cost;
        if (s[ls - 1] === t[lt - 1]) {
            cost = 0;
        } else {
            cost = 1;
        }

        return Math.min(
            this.calculateDistance(s, ls - 1, t, lt) + 1,
            this.calculateDistance(s, ls, t, lt - 1) + 1,
            this.calculateDistance(s, ls - 1, t, lt - 1) + cost
        );
    }

    /**
     * The Levenshtein distance between two strings is a minimum number
     * of edits needed to transform one string into the other, with the
     * allowable edit operations being insertion, deletion,
     * or substitution of a single character.
     *
     * @public
     * @module others/levenshtein-distance
     *
     * @example
     *
     * var dist = require('path-to-algorithms/src/others/' +
     * 'levenshtein-distance').levenshteinDistance;
     * console.log(dist('kitten', 'sitting')); // 3
     *
     * @param {String} s Source string.
     * @param {String} t Target string.
     * @return {Number} Minimum number of edits needed
     * to transform source string into the target string.
     */
    public static levenshteinDistance(source: string, target: string): number {
        return LevenshteinDistance.calculateDistance(source, source.length, target, target.length);
    };
}

let dist = LevenshteinDistance.levenshteinDistance;
console.log(dist('kitten', 'sitting')); // 3