define(["require", "exports", "./coin", "./product", "./productFactory"], function (require, exports, Coins, product_1, productFactory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VendingMachineSize;
    (function (VendingMachineSize) {
        VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
        VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
        VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
    })(VendingMachineSize = exports.VendingMachineSize || (exports.VendingMachineSize = {}));
    class Cell {
        constructor(product) {
            this.product = product;
            this.stock = ko.observable(3);
            this.sold = ko.observable(false);
        }
    }
    class VendingMachine {
        constructor(useProductFactory = true) {
            this.useProductFactory = useProductFactory;
            this.paid = ko.observable(0);
            this.selectedCell = ko.observable(new Cell(new product_1.Initial()));
            this.cells = ko.observableArray([]);
            this.acceptedCoins = [new Coins.Dime(), new Coins.Quarter(), new Coins.Half(), new Coins.Dollar()];
            this.canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);
            this.select = (cell) => {
                cell.sold(false);
                this.selectedCell(cell);
            };
            this.acceptCoin = (coin) => {
                let oldTotal = this.paid();
                this.paid(oldTotal + coin.value);
            };
            this.pay = () => {
                if (this.selectedCell().stock() < 1) {
                    alert("I'm sorry, we're out of them!");
                    return;
                }
                let currentPayed = this.paid();
                this.paid(Math.round(((currentPayed - this.selectedCell().product.price) * 100)) / 100);
                let currentStock = this.selectedCell().stock();
                this.selectedCell().stock(currentStock - 1);
                this.selectedCell().sold(true);
            };
        }
        set size(givenSize) {
            this.cells([]);
            for (let index = 0; index < givenSize; index++) {
                this.cells.push(new Cell(productFactory_1.default()));
            }
            ;
        }
    }
    exports.VendingMachine = VendingMachine;
});
//# sourceMappingURL=vendingMachine.js.map