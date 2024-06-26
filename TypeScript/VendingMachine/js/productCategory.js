class ProductCategory {
  imgPath = '../img/';
  name;
}
class SodaCategory extends ProductCategory {
  name = 'Soda';
  getImageUrl() {
    return this.imgPath + 'SodaCan.png';
  }
}
class NutsCategory extends ProductCategory {
  name = 'Nuts';
  getImageUrl() {
    return this.imgPath + 'Nuts.png';
  }
}
class ChipsCategory extends ProductCategory {
  name = 'Potato chips';
  getImageUrl() {
    return this.imgPath + 'Chips.png';
  }
}
class CandyCategory extends ProductCategory {
  name = 'Candy';
  getImageUrl() {
    return this.imgPath + 'Candy.png';
  }
}
class CandyBarCategory extends ProductCategory {
  name = 'Candy bar';
  getImageUrl() {
    return this.imgPath + 'CandyBar.png';
  }
}
export {
  ProductCategory,
  SodaCategory,
  NutsCategory,
  ChipsCategory as PotatoChipsCategory,
  CandyCategory,
  CandyBarCategory,
};
//# sourceMappingURL=productCategory.js.map
