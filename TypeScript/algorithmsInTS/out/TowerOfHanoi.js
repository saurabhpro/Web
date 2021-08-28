'use strict';

class TowerOfHanoi {
  static hanoi(count, source, intermediate, goal) {
    if (count === 1) {
      this.arresult.push({ source: source, goal: goal });
    } else {
      this.hanoi(count - 1, source, goal, intermediate);
      this.arresult.push({ source: source, goal: goal });
      this.hanoi(count - 1, intermediate, source, goal);
    }
    return this.arresult;
  }
}

TowerOfHanoi.arresult = [];
let movements = TowerOfHanoi.hanoi(3, 'a', 'b', 'c');
movements.forEach((move) => {
  console.log('Move', move.source, 'to', move.goal);
});
//# sourceMappingURL=TowerOfHanoi.js.map
