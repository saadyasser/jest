const calculateAverage = require('./calculateAverage');

describe('average', () => {
  test('calculateAverage will be 4', () => {
    expect(calculateAverage([2, 2])).toBe(2);
  });

  test('calculateAverage will be 0', () => {
    expect(calculateAverage([])).toBe(0);
  });
  test('calculateAverage will be 0', () => {
    expect(calculateAverage()).toBe(0);
  });
});
