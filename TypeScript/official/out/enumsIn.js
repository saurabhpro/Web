//Enums are real objects that exist at runtime. One reason is the ability to maintain a reverse mapping from enum values to enum names.
var Enum;
(function (Enum) {
  Enum[(Enum['A'] = 0)] = 'A';
})(Enum || (Enum = {}));
let a2 = Enum.A;
let nameOfA = Enum[Enum.A]; // "A"
//# sourceMappingURL=enumsIn.js.map
