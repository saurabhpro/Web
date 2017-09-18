define(["require", "exports", "./productCategory"], function (require, exports, categories) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Initial {
        constructor() {
            this.name = "Please select a product";
            this.price = 0;
        }
    }
    exports.Initial = Initial;
    class CocaCola {
        constructor() {
            this.name = "Coca-Cola";
            this.price = 2.30;
            this.category = new categories.SodaCategory();
        }
    }
    exports.CocaCola = CocaCola;
    class Fanta {
        constructor() {
            this.name = "Fanta";
            this.price = 2;
            this.category = new categories.SodaCategory();
        }
    }
    exports.Fanta = Fanta;
    class Sprite {
        constructor() {
            this.name = "Sprite";
            this.price = 1.80;
            this.category = new categories.SodaCategory();
        }
    }
    exports.Sprite = Sprite;
    class Peanuts {
        constructor() {
            this.name = "Peanuts";
            this.price = 1.50;
            this.category = new categories.NutsCategory();
        }
    }
    exports.Peanuts = Peanuts;
    class Cashews {
        constructor() {
            this.name = "Cashews";
            this.price = 2.80;
            this.category = new categories.NutsCategory();
        }
    }
    exports.Cashews = Cashews;
    class Plain {
        constructor() {
            this.name = "Plain";
            this.price = 2;
            this.category = new categories.PotatoChipsCategory();
        }
    }
    exports.Plain = Plain;
    class Cheddar {
        constructor() {
            this.name = "Cheddar";
            this.price = 2;
            this.category = new categories.PotatoChipsCategory();
        }
    }
    exports.Cheddar = Cheddar;
    class Mints {
        constructor() {
            this.name = "Mints";
            this.price = 1.30;
            this.category = new categories.CandyCategory();
        }
    }
    exports.Mints = Mints;
    class Gummies {
        constructor() {
            this.name = "Gummies";
            this.price = 1.90;
            this.category = new categories.CandyCategory();
        }
    }
    exports.Gummies = Gummies;
    class Hersey {
        constructor() {
            this.name = "Hersey's";
            this.price = 1.30;
            this.category = new categories.CandyBarCategory();
        }
    }
    exports.Hersey = Hersey;
    class MilkyWay {
        constructor() {
            this.name = "Milky Way";
            this.price = 1.80;
            this.category = new categories.CandyBarCategory();
        }
    }
    exports.MilkyWay = MilkyWay;
});
//# sourceMappingURL=product.js.map