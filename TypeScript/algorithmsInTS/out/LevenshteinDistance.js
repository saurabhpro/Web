"use strict";

class LevenshteinDistance {
    static calculateDistance(s, ls, t, lt) {
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
        return Math.min(this.calculateDistance(s, ls - 1, t, lt) + 1, this.calculateDistance(s, ls, t, lt - 1) + 1, this.calculateDistance(s, ls - 1, t, lt - 1) + cost);
    }

    static levenshteinDistance(source, target) {
        return LevenshteinDistance.calculateDistance(source, source.length, target, target.length);
    }
    ;
}

let dist = LevenshteinDistance.levenshteinDistance;
console.log(dist('kitten', 'sitting'));
//# sourceMappingURL=LevenshteinDistance.js.map