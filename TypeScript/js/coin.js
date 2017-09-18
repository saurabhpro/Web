define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Coin {
        constructor(value) {
            this.value = value;
        }
    }
    exports.Coin = Coin;
    class Dime extends Coin {
        constructor() {
            super(.1);
        }
        getImageUrl() {
            return "img/Dime.png";
        }
    }
    exports.Dime = Dime;
    class Quarter extends Coin {
        constructor() {
            super(.25);
        }
        getImageUrl() {
            return "img/Quarter.png";
        }
    }
    exports.Quarter = Quarter;
    class Half extends Coin {
        constructor() {
            super(.5);
        }
        getImageUrl() {
            return "img/Half.png";
        }
    }
    exports.Half = Half;
    class Dollar extends Coin {
        constructor() {
            super(1);
        }
        getImageUrl() {
            return "img/Dollar.jpg";
        }
    }
    exports.Dollar = Dollar;
});
//# sourceMappingURL=coin.js.map