const utils = require("./utils");

describe("Utils", () => {
  describe("#add", () => {
    test("should add two numbers", () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44);
    });
  });

  test("should async add two numbers", (done) => {
    utils.asyncAdd(4, 3, (sum) => {
      expect(sum).toBe(7);
      done();
    });
  });

  test("should square a number", () => {
    var res = utils.square(3);

    //expect(res).toBe(9).toBeA('number');
    expect(res).toBe(9);
  });

  test("should async square a number", (done) => {
    utils.asyncSquare(5, (res) => {
      expect(res).toBe(25);
      done();
    });
  });
});

// should verify first and last names are set
// assert it includes firstName and lastName with proper values
test("should set firstName and lastName", () => {
  var user = {
    location: "Philadelphia",
    age: 25,
  };

  var res = utils.setName(user, "Andrew Mead");

  expect(res).toMatchObject({
    firstName: "Andrew",
    lastName: "Mead",
  });
});

// it('should expect some values', () => {
//   // expect(12).toNotBe(12);
//   // expect({name: 'andrew'}).toNotEqual({name: 'Andrew'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelphia'
//   }).toExclude({
//     age: 23
//   })
// });
