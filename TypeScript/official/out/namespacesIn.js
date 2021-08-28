/**
 * we’ll move all validator-related entities into a namespace called Validation.
 * Because we want the interfaces and classes here to be visible outside the namespace,
 * we preface them with export. Conversely, the variables lettersRegexp and numberRegexp are implementation details,
 * so they are left unexported and will not be visible to code outside the namespace.
 */
var Validation;
(function (Validation) {
  const lettersRegexp = /^[A-Za-z]+$/;
  const numberRegexp = /^[0-9]+$/;

  class LettersOnlyValidator {
    isAcceptable(s) {
      return lettersRegexp.test(s);
    }
  }

  Validation.LettersOnlyValidator = LettersOnlyValidator;

  class ZipCodeValidator {
    isAcceptable(s) {
      return s.length === 5 && numberRegexp.test(s);
    }
  }

  Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
// Some samples to try
let strings = ['Hello', '98052', '101'];
// Validators to use
let validators = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (let s of strings) {
  for (let name in validators) {
    console.log(
      `"${s}" - ${
        validators[name].isAcceptable(s) ? 'matches' : 'does not match'
      } ${name}`
    );
  }
}
//# sourceMappingURL=namespacesIn.js.map
