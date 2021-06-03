export const cToF = (celsius: number): string => {
  var cToFahr = celsius * (9 / 5 + 32);
  return cToFahr.toFixed(2) + ' \xB0F';
};

export const fToC = (fahrenheit: number): string => {
  var fToCel = ((fahrenheit - 32) * 5) / 9;
  return fToCel.toFixed(2) + '\xB0C';
};
