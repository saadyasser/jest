const isValidEmail = require('./isValidEmail');

describe('isValidEmail', () => {
  test('email should be valid', () => {
    expect(isValidEmail('test@g.com')).toBe(true);
  });

  test('email should not be valid', () => {
    expect(isValidEmail('test@g')).toBe(false);
  });
});
