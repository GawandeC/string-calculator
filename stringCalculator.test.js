const add = require('./stringCalculator');

describe('String Calculator', () => {
  test('should return 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('should return the number itself for a single number', () => {
    expect(add('1')).toBe(1);
  });

  test('should return the sum of two numbers', () => {
    expect(add('1,5')).toBe(6);
  });

  test('should return the sum of multiple numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
  });

  test('handles newlines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("10\n20\n30")).toBe(60);
});

test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('throws error for negative numbers', () => {
    expect(() => add("//;\n1;-2;3")).toThrow("Negative numbers not allowed: -2");
    expect(() => add("//;\n1;-2;-3")).toThrow("Negative numbers not allowed: -2, -3");
});

test('ignores numbers greater than 1000', () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,1001")).toBe(1000);
    expect(add("//;\n1000;2000;2")).toBe(1002);
});

test('supports custom delimiters with varying lengths', () => {
    expect(add("//***\n1***2***3")).toBe(6); // Custom delimiter: ***
    expect(add("//[!!!]\n1!!!2!!!3")).toBe(6); // Custom delimiter: [!!!]
    expect(add("//|\n10|20|30")).toBe(60); // Custom delimiter: |
});

});
