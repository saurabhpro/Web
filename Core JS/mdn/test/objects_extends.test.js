import { expect } from 'chai';
import { mArr } from '../objects_extends.js';

describe('MegaArray', () => {
  describe('array ', () => {
    it('should return [1, 2, 3] when the value is present', () => {
      expect(mArr.contents).to.eql([1, 2, 3]);
    });
  });
});

/*------------------------------
saurabh.kumar@C02D70TBMD6N Core JS % npm test mdn/test

> jspractices@1.0.0 test
> mocha "mdn/test"

[ 1, 2, 3 ]


  MegaArray
    array 
      ✓ should return [1, 2, 3] when the value is present


  1 passing (3ms)


  
saurabh.kumar@C02D70TBMD6N Core JS % mocha mdn/test 
[ 1, 2, 3 ]


  MegaArray
    array 
      ✓ should return [1, 2, 3] when the value is present


  1 passing (4ms)
--------------------------------*/
