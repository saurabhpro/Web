function printName(obj: { first: string; last?: string }) {
  //Object is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }

  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}

// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// or fix the type as GET only

// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");

// You can use as const to convert the entire object to be type literals:

const req2 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req2.url, req2.method);

function handleRequest(url: string, method: string) {
  throw new Error("Function not implemented.");
}
//The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general version like string or number.

// From ES2020 onwards, there is a primitive in JavaScript used for very large integers, BigInt:

// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;

// symbol

// There is a primitive in JavaScript used to create a globally unique reference via the function Symbol():

const firstName = Symbol("name");
const secondName = Symbol("name");

// if (firstName === secondName) {
//   // This condition will always return 'false' since the types 'typeof firstName' and 'typeof secondName' have no overlap.
//   // Can't ever happen
// }

function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return new Array(padding + 1).join(" ") + input;
  }
  return padding + input;
}
