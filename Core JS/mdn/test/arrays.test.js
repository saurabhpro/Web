import { expect } from 'chai';

describe('Array', () => {
  const arr = ['I', 'study', 'JavaScript'];

  // from index 2
  // delete 1
  // then insert "complex" and "language"
  arr.splice(2, 1, 'complex', 'language');

  describe('splice ', () => {
    it('should return ["I", "study", "complex", "language"] after remove first three elements and replacing them', () => {
      expect(arr).to.eql(['I', 'study', 'complex', 'language']);
    });
  });

  const arr2 = ['I', 'study', 'JavaScript', 'right', 'now'];
  // remove 2 first elements
  let removed = arr2.splice(0, 2, "Let's", 'dance');
  describe('splice ', () => {
    it(`should return ["Let's", "dance", "complex","JavaScript", "language"] after remove first two elements and replacing them`, () => {
      expect(arr2).to.eql(["Let's", 'dance', 'JavaScript', 'right', 'now']);
    });
    it('should return ["I", "study"] after remove first two elements and replacing them', () => {
      expect(removed).to.eql(['I', 'study']);
    });
  });

  const arr3 = ['t', 'e', 's', 't'];
  describe(`slice (it creates a new array and not change existing)`, () => {
    it(`should return ["e", "s"] after slicing copy from 1 to 3`, () => {
      expect(arr3.slice(1, 3)).to.eql(['e', 's']);
    });
    it(`should return ["s", "t"] after slicing copy from -2 till the end`, () => {
      expect(arr3.slice(-2)).to.eql(['s', 't']);
    });
  });
});
