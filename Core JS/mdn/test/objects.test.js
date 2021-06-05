import { expect } from 'chai';
import { user } from '../objects.js';

describe('Objects', () => {
  describe('assign ', () => {
    it(`should merge props { canEdit: true, canView: true, name: 'John' } when the value is present`, () => {
      expect(user).to.eql({
        canEdit: true,
        canView: true,
        name: 'John',
      });
    });
  });

  const user2 = { name: 'John' };
  Object.assign(user2, { name: 'Pete' });
  describe('assign ', () => {
    it(`should override John to Pete { name: 'Pete' } when the value is present`, () => {
      expect(user2).to.eql({
        name: 'Pete',
      });
    });
  });
});
