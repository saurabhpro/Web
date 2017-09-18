import * as products from "./product"

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
 * @returns {products.Product} 
 */
export default function getProduct(): products.Product {
    let random = Math.floor(Math.random() * 11);    //range [0-11)
    switch (random) {
        case 0: return new products.CocaCola()
        case 1: return new products.Fanta()
        case 2: return new products.Sprite()
        case 3: return new products.Peanuts()
        case 4: return new products.Cashews()
        case 5: return new products.Plain()
        case 6: return new products.Cheddar()
        case 7: return new products.Mints()
        case 8: return new products.Gummies()
        case 9: return new products.Hersey()
        default: return new products.MilkyWay()
    }
}

