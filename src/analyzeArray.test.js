const analyzeArray = require("./analyzeArray");

test("Test array data", () => {
  expect(analyzeArray([2, 4, 6])).toEqual({
    average: 4,
    min: 2,
    max: 6,
    length: 3,
  });
});
