import { CocaCola, Fanta, Sprite, Peanuts, Cashews, Plain, Cheddar, Mints, Gummies, Hersey, MilkyWay, } from './product';
/**
 * The default export, there is only a single default export per module.
 * A default export can be a function, a class, an object or anything else.
 * This value is to be considered as the "main" exported value since it will be the simplest to import.
 *
 * you can give any name - it will still import the deafult export, Ex:
 * `import getVendingProduct from "./productFactory"`
 *
 * update - renamed case 10 -> default
 *
 * @export
 * @returns {Product}
 */
export default function getProduct() {
    let random = Math.floor(Math.random() * 11); //range [0-11)
    switch (random) {
        case 0:
            return new CocaCola();
        case 1:
            return new Fanta();
        case 2:
            return new Sprite();
        case 3:
            return new Peanuts();
        case 4:
            return new Cashews();
        case 5:
            return new Plain();
        case 6:
            return new Cheddar();
        case 7:
            return new Mints();
        case 8:
            return new Gummies();
        case 9:
            return new Hersey();
        default:
            return new MilkyWay();
    }
}
//# sourceMappingURL=productFactory.js.map