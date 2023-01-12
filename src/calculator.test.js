const calculator = require("./calculator");

test("Test add function", () => {
  expect(calculator.add(4, 10)).toBe(14);
});

test("Test subtraction function", () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test("Test multiplication function", () => {
  expect(calculator.multiply(4, 10)).toBe(40);
});

test("Test division function", () => {
  expect(calculator.divide(30, 10)).toBe(3);
});
