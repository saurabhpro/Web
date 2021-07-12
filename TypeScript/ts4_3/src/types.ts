function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
//  printText("G'day, mate", "centre");

interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}

configure({ width: 100 });
configure("auto");
// configure("automatic");

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
