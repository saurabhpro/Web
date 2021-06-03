class MegaArray extends Array {
  constructor(...contents) {
    super(); // The class constructor has to call super(), so this is defined when inheriting from Array.
    this.contents = contents;
  }
}

export const mArr = new MegaArray(1, 2, 3);
console.log(mArr.contents);

/*
 * saurabh.kumar@C02D70TBMD6N Core JS % node mdn/super.js
 * [ 1, 2, 3 ]
 */
