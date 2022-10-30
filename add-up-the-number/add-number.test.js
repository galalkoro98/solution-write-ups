const testingNumber = require('./add-number');

describe('Add up all the numbers from 1 to the number you passed to the function.', () => {
  it('it should give the sum of given number', () => {
    const inputNumber = 4;
    expect(testingNumber.addTheNumber(inputNumber)).toEqual(10);
  });
});
