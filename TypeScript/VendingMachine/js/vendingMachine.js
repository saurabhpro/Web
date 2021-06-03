import { Dime, Quarter, Dollar, Half } from './coin';
import { Initial as Init } from './product';
import getProduct from './productFactory';
var VendingMachineSize;
(function (VendingMachineSize) {
    VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
    VendingMachineSize[VendingMachineSize["medium"] = 9] = "medium";
    VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
})(VendingMachineSize || (VendingMachineSize = {}));
class Cell {
    product;
    constructor(product) {
        this.product = product;
    }
    stock = ko.observable(3);
    sold = ko.observable(false);
}
class VendingMachine {
    useProductFactory;
    paid = ko.observable(0);
    selectedCell = ko.observable(new Cell(new Init()));
    cells = ko.observableArray([]);
    acceptedCoins = [
        new Dime(),
        new Quarter(),
        new Half(),
        new Dollar(),
    ];
    canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);
    constructor(useProductFactory = true) {
        this.useProductFactory = useProductFactory;
    }
    set size(givenSize) {
        this.cells([]);
        for (let index = 0; index < givenSize; index++) {
            this.cells.push(new Cell(getProduct()));
        }
    }
    select = (cell) => {
        cell.sold(false);
        this.selectedCell(cell);
    };
    acceptCoin = (coin) => {
        let oldTotal = this.paid();
        this.paid(oldTotal + coin.value);
    };
    pay = () => {
        if (this.selectedCell().stock() < 1) {
            alert("I'm sorry, we're out of them!");
            return;
        }
        let currentPayed = this.paid();
        this.paid(Math.round((currentPayed - this.selectedCell().product.price) * 100) / 100);
        let currentStock = this.selectedCell().stock();
        this.selectedCell().stock(currentStock - 1);
        this.selectedCell().sold(true);
    };
}
export { VendingMachine, VendingMachineSize };
//# sourceMappingURL=vendingMachine.js.map