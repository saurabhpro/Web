//Enums are real objects that exist at runtime. One reason is the ability to maintain a reverse mapping from enum values to enum names.

enum Enum {
    A
}
let a2 = Enum.A;
let nameOfA = Enum[Enum.A]; // "A"