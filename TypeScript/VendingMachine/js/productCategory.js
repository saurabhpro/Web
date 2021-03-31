define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {value: true});

    class ProductCategory {
        constructor() {
            this.imgPath = "img/";
        }
    }

    exports.ProductCategory = ProductCategory;

    class SodaCategory extends ProductCategory {
        constructor() {
            super(...arguments);
            this.name = "Soda";
        }

        getImageUrl() {
            return this.imgPath + "SodaCan.png";
        }
    }

    exports.SodaCategory = SodaCategory;

    class NutsCategory extends ProductCategory {
        constructor() {
            super(...arguments);
            this.name = "Nuts";
        }

        getImageUrl() {
            return this.imgPath + "Nuts.png";
        }
    }

    exports.NutsCategory = NutsCategory;

    class ChipsCategory extends ProductCategory {
        constructor() {
            super(...arguments);
            this.name = "Potato chips";
        }

        getImageUrl() {
            return this.imgPath + "Chips.png";
        }
    }

    exports.PotatoChipsCategory = ChipsCategory;

    class CandyCategory extends ProductCategory {
        constructor() {
            super(...arguments);
            this.name = "Candy";
        }

        getImageUrl() {
            return this.imgPath + "Candy.png";
        }
    }

    exports.CandyCategory = CandyCategory;

    class CandyBarCategory extends ProductCategory {
        constructor() {
            super(...arguments);
            this.name = "Candy bar";
        }

        getImageUrl() {
            return this.imgPath + "CandyBar.png";
        }
    }

    exports.CandyBarCategory = CandyBarCategory;
});
//# sourceMappingURL=productCategory.js.map