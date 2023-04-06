const {isLeapYear} = require('.')

describe('isLeapYear', () => {
  it('if year is multiple of 4 return true', () => {
    const result = isLeapYear(2024);
    expect(result).toBe(true);
  });

  it('if year is multiple of 100 return false', () => {
    expect(isLeapYear(1900)).toBe(false);
  });

  it('if year is multiple of 400 return true', () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  it('if year is not number throw Error("year is not number")', () => {
    expect(() => isLeapYear('foo')).toThrow("year is not number");
  });

  it('if year is less than 1582 throw Error("year should be greater than 1582")', () => {
    expect(() => isLeapYear(1000)).toThrow("year should be greater than 1582");
  });

  it('if year is not integer throw Error("year should be integer")', () => {
    expect(() => isLeapYear(1000.4)).toThrow("year should be integer");
  });

});

describe('isLeapYear', () => {
  it('test equal', () => {
    const obj1 = {name: 'Bill Gates'};
    const obj2 = {name: 'Bill Gates'};

    expect(obj1).toEqual(obj2);
  });

  it('test expect.any', () => {
    const foo = 'dvdsfsd';

    expect(foo).toEqual(expect.any(Number));
  });
});
