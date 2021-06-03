import { expect } from 'chai';
import { sum } from '../reduce.js';

describe('Reduce', () => {
  describe('sum ', () => {
    it('should return 6 when reduced 1, 2, 3', () => {
      expect(sum(1, 2, 3)).to.equal(6);
    });
  });

  describe('sum ', () => {
    it('should return 10 when reduced 1, 2, 3, 4', () => {
      expect(sum(1, 2, 3, 4)).to.equal(10);
    });
  });
});

/*

saurabh.kumar@C02D70TBMD6N Core JS % mocha mdn/test
  Reduce
    sum 
      ✓ should return 6 when reduced 1, 2, 3
    sum 
      ✓ should return 10 when reduced 1, 2, 3, 4

*/
