import {
  SodaCategory,
  NutsCategory,
  PotatoChipsCategory,
  CandyCategory,
  CandyBarCategory,
} from './productCategory';
class Initial {
  name = 'Please select a product';
  price = 0;
}
class CocaCola {
  name = 'Coca-Cola';
  price = 2.3;
  category = new SodaCategory();
}
class Fanta {
  name = 'Fanta';
  price = 2;
  category = new SodaCategory();
}
class Sprite {
  name = 'Sprite';
  price = 1.8;
  category = new SodaCategory();
}
class Peanuts {
  name = 'Peanuts';
  price = 1.5;
  category = new NutsCategory();
}
class Cashews {
  name = 'Cashews';
  price = 2.8;
  category = new NutsCategory();
}
class Plain {
  name = 'Plain';
  price = 2;
  category = new PotatoChipsCategory();
}
class Cheddar {
  name = 'Cheddar';
  price = 2;
  category = new PotatoChipsCategory();
}
class Mints {
  name = 'Mints';
  price = 1.3;
  category = new CandyCategory();
}
class Gummies {
  name = 'Gummies';
  price = 1.9;
  category = new CandyCategory();
}
class Hersey {
  name = "Hersey's";
  price = 1.3;
  category = new CandyBarCategory();
}
class MilkyWay {
  name = 'Milky Way';
  price = 1.8;
  category = new CandyBarCategory();
}
export {
  MilkyWay,
  Hersey,
  Mints,
  Gummies,
  Cheddar,
  Plain,
  Cashews,
  Peanuts,
  Sprite,
  Fanta,
  CocaCola,
  Initial,
};
//# sourceMappingURL=product.js.map
